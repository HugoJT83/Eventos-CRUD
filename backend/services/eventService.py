import bson
from fastapi import HTTPException

from models.eventModel import Event, EventImage
from config.db import events_collection,user_collection,profile_collection


async def createEventService(data: Event, userId: str):
    check_exist = await user_collection.find_one({"_id":bson.ObjectId(userId)},{
        "password":0
    })
    if not check_exist:
        raise HTTPException(status_code=404,detail="Creator User Not Found")
    
    event_data = data.dict()
    doc = await events_collection.insert_one(event_data)
    event_id = str(doc.inserted_id)
    
    await profile_collection.find_one_and_update(
        {"user_id":data.creator_id},
        {
            "$push":{
                "created_events":event_id
            }
        }
    )
    
    try:
        return {
            "msg":"Event creation success",
            "id":str(doc.inserted_id)
        }
        
    except Exception as e:
        raise HTTPException(status_code=500,detail="Event Creation error:"+f"{e}")
    
    
    
    
    