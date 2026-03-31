from fastapi import APIRouter, Depends, File, Request, UploadFile
from controllers import authController
from controllers.authController import loginController, registerController
from typing import Annotated, Any 
from models.authModel import LoginUser, RegisterUser
from config.db import user_collection
from middleware.VerifyToken import verifyToken


router = APIRouter(prefix="/api/v1/auth", tags=['auth'])

#register
@router.post("/register")
async def registerView(data: RegisterUser):
    return await registerController(data)

@router.post("/login")
async def loginView(data: LoginUser):
    return await loginController(data)

@router.get("/profile")
async def profileView(userId = Depends(verifyToken)):
    return await authController.profileController(userId)

    
@router.put("/update-avatar")
async def updateAvatar(avatar: Annotated[UploadFile,File()], userId = Depends(verifyToken)):
    return await authController.updateAvatarController(avatar, userId)