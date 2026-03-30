from fastapi import APIRouter, Depends, Request
from controllers import authController
from controllers.authController import loginController, registerController
from typing import Any
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
    return {
        "msg":"Profile Route",
        "userId":userId
    }