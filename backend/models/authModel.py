import bson
from pydantic import BaseModel,Field, EmailStr,field_validator
from datetime import datetime, timezone
from typing import List, Optional, Union
from enum import Enum

class RolesEnum(str,Enum):
    user="USER"
    admin="ADMIN"
    
class InterestsEnum(str,Enum):
    deportes="DEPORTES"
    artesania="ARTESANIA"
    juegos="JUEGOS"
    espectaculos="ESPECTACULOS"
    moda="MODA"

class ProfileImage(BaseModel):
    image_uri:str
    public_id:str

class User(BaseModel):
    
    name: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...,min_length=6)
    role: Optional[RolesEnum]  = Field(default = RolesEnum.user)
    created_at:datetime = Field(default_factory=datetime.now)
    update_at:datetime = Field(default_factory=datetime.now)
    
    """  Opcional   
        created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc))
    
    updated_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        sa_column_kwargs={"onupdate": lambda: datetime.now(timezone.utc)}) 
    """

    @field_validator('name')
    def validate_name(cls,value):
        if len(value)<3:
            raise ValueError("El nombre debe ser mayor de 3 caracteres")
        return value
    

class Address(BaseModel):
    country:str
    state:str

class UserProfile(BaseModel):
    
    user_id:str = Field(...)
    name: str = Field(...)
    avatar: Optional[ProfileImage] = None
    description:Optional[str] = ""
    interests: Optional[InterestsEnum]  = None
    address: Optional[Address] = None
    
    created_at:datetime = Field(default_factory=datetime.now)
    update_at:datetime = Field(default_factory=datetime.now)
    
    @field_validator('name')
    def validate_name(cls,value):
        if len(value)<3:
            raise ValueError("El nombre debe ser mayor de 3 caracteres")
        return value


class RegisterUser(User):
    pass

class UpdateDetails(BaseModel):
    name:str = Field(...)
    description: Optional[str] = ""
    address: Optional[Address] = None

class LoginUser(BaseModel):
    email: EmailStr = Field(...)
    
    password: str = Field(...,min_length=6)
    pass