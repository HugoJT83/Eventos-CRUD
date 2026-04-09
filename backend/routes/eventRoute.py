

from fastapi import APIRouter, Depends

from controllers.eventController import createEventController
from middleware.VerifyToken import verifyToken
from models.eventModel import Event


router = APIRouter(prefix="/api/v1/event", tags=['event'])

@router.post("/create-event")
async def createEvent(data: Event, userId = Depends(verifyToken)):
    return await createEventController(data,userId)