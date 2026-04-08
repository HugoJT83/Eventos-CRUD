
from datetime import datetime
import re
from typing import List

from pydantic import BaseModel, Field, field_validator

from models.authModel import InterestsEnum

class Location(BaseModel):
    street: str = Field(...)
    city: str = Field(...)
    province: str = Field(...)
    postal_code: str = Field(...)
    
    @field_validator('postal_code')
    @classmethod
    def validate_postal_code(cls, value):
        if not re.match(r'/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/', value):
            raise ValueError('El código postal debe tener 5 dígitos adecuados')
        return value

    @field_validator('street','city','province')
    @classmethod
    def check_not_empty_whitespace(cls,value):
        if not value.strip():
            raise ValueError("El campo no puede estar vacío o solo contener espacios en blanco.")
        return value
    
    
class EventImage(BaseModel):
    image_uri:str
    public_id:str


class Event(BaseModel):
    creator_id: str = Field(...)
    title: str = Field(...)
    description: str = Field(...)
    phone: str = Field(...)
    creation_date: datetime = Field(default_factory=datetime.now)
    event_date:datetime = Field(...)
    location: Location = Field(...)
    interests: List[InterestsEnum] = Field(default=[], max_items=3)
    images: List[EventImage] = Field(...,min_items=1)
    updated_at: datetime = Field(default_factory=datetime.now)

    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, value):
        clean_phone = re.sub(r'[\s\-]', '', value) #limpia espacios o guiones
        
        if not re.match(r'^(\+?34)?(6\d{2}|7[1-9]\d{1})\d{6}$',clean_phone):
            raise ValueError("El número de teléfono debe ser válido")
        return value
    
    
    @field_validator('title')
    @classmethod
    def validate_title(cls, value):
        if len(value)<3:
            raise ValueError("El título debe ser mayor de 3 caracteres")
        return value
    
    @field_validator('description')
    @classmethod
    def validate_description(cls, value):
        if len(value)<10:
            raise ValueError("La descripción debe ser mayor de 10 caracteres")
        return value
    
    @field_validator('event_date')
    @classmethod
    def check_future_date(cls, value):
        if value < datetime.now():
            raise ValueError("la fecha del evento no puede ser anterior a la fecha actual.")
        return value
    
    @field_validator('interests')
    @classmethod
    def validate_interests_length(cls,value):
        if len(value) > 3:
            raise ValueError("Un evento solo puede contener como máximo 3 intereses")
        return value
    
