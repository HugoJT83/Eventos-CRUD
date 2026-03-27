from fastapi import HTTPException

from services import authService
from services.authService import registerService

def registerController(data):
    res_obj = registerService(data)
    return res_obj
