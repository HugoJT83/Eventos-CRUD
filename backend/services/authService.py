from typing import Annotated

import bson
import cloudinary
import cloudinary.uploader
import config.CloudinaryConfig
from fastapi import File, UploadFile

from config import db
from config.db import user_collection, profile_collection
from models import authModel
from models.authModel import RegisterUser, LoginUser, UpdateDetails
from fastapi.exceptions import HTTPException
import bcrypt
import jwt
from datetime import datetime, timedelta
from config.env import ENVConfig

async def registerService(data:RegisterUser):
    check_exist = await user_collection.find_one({"email":data.email.lower()})
    
    if check_exist:
        raise HTTPException(status_code=400,detail="User already exists")
    
    salt = bcrypt.gensalt()
    # print(salt)
    hash_string = bcrypt.hashpw(data.password.encode(),salt).decode()
    user_data = data.dict()
    user_data['password']=hash_string
    """ del user_data['name'] """
    
    user_data['email'] = data.email.lower()
    doc = await user_collection.insert_one(user_data)
    
    #profile
    
    user_p = authModel.UserProfile(user_id=str(doc.inserted_id), name=data.name)
    
    await profile_collection.insert_one(user_p.dict())
    
    
    # token
    token = jwt.encode({
        "user_id":str(doc.inserted_id),
        "exp": datetime.utcnow()+timedelta(days=10),
        'iat':datetime.utcnow()
    }, ENVConfig.JWT_AUTH_SCREATE,algorithm="HS256")
    
    return {
        "msg":"Register Success",
        "token":token
    }
    
async def loginService(data: LoginUser):
    check_exist = await user_collection.find_one({"email":data.email.lower()})
    
    if not check_exist:
        raise HTTPException(status_code=400,detail="User doesn't exist")
    
    is_match = bcrypt.checkpw(data.password.encode(), check_exist['password'].encode())
    if not is_match:
        raise HTTPException(status_code=400, detail="Invalid Credentials")
     
     
    token = jwt.encode({
        "user_id":str(check_exist['_id']),
        "exp": datetime.utcnow()+timedelta(days=10),
        'iat':datetime.utcnow()
    }, ENVConfig.JWT_AUTH_SCREATE,algorithm="HS256")
    return {
        "msg":"Successful login",
        "token": token
    }

async def profileService(userId: str):
    check_exist = await user_collection.find_one({"_id":bson.ObjectId(userId)},{
        "password":0
    })
    if not check_exist:
        raise HTTPException(status_code=404,detail="User Details not Found")
    
    check_exist['_id'] = str(check_exist['_id'])
    profile = await profile_collection.find_one({"user_id":check_exist['_id']})
    
    if not profile:
        raise HTTPException(status_code=404,detail="Profile not found")
    
    del profile['_id']
    del profile['user_id']
    
    if profile.get('avatar') and 'image_uri' in profile['avatar']:
        profile['avatar'] = profile['avatar']['image_uri']
    else:
        profile['avatar'] = None
        
    return check_exist | profile

async def updateAvatarService(avatar: Annotated[UploadFile,File()], userId: str):
    exist = await profile_collection.find_one({"user_id":userId})
    
    if exist.get('avatar') and exist['avatar'].get('public_id'):
        cloudinary.uploader.destroy(exist['avatar']['public_id'])
    
    
    contents = await avatar.read()
    upload_result = cloudinary.uploader.upload(contents, folder="events_user_profile")
    
    await profile_collection.find_one_and_update({"user_id":userId},{
            "$set":{
                "avatar":{
                    "image_uri":upload_result['secure_url'],
                    "public_id":upload_result['public_id']
                },
                "update_at":datetime.now()
            }
    })
    return {
        "msg":"Profile Updated Success"
    }
    
async def UpdateDetailsService(data: UpdateDetails, userId:str):
    
    check_exist = await profile_collection.find_one_and_update({"user_id":userId},{
        "$set":{
            "name":data.name,
            "description":data.description,
            "address":data.address.dict(),
            "update_at":datetime.now()
        }
    })
    if not check_exist:
        raise HTTPException(status_code=404,detail="User Details not Found")
    
    return{
        "msg":"Details Update Success"

    }