from fastapi import HTTPException

from services import authService
from services.authService import loginService, registerService
from models.authModel import LoginUser, RegisterUser

async def registerController(data: RegisterUser):
    try:
        res_obj = await registerService(data)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{e}")

async def loginController(data: LoginUser):
    try:
        res_obj = await loginService(data)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=400,detail= f"{e}")
        
async def profileController(userId:str):
    try:
        res_obj = await authService.profileService(userId)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=400,detail=f"{e}")
    
    