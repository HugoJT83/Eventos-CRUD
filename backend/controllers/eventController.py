

from fastapi import HTTPException

from models.eventModel import Event
from services.eventService import createEventService


async def createEventController(data: Event, userId):
    try:
        res_obj = await createEventService(data,userId)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{e}")
    
