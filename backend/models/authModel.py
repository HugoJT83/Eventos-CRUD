from pydantic import BaseModel,Field, EmailStr,field_validator
from datetime import datetime, timezone
from typing import Optional, Union
from enum import Enum

class RolesEnum(str,Enum):
    user="USER"
    admin="ADMIN"

class ProfileImage(BaseModel):
    image_uri:str
    public_id:str

class User(BaseModel):
    
    name: str = Field(...)
    
    email: EmailStr = Field(...)
    
    password: str = Field(...,min_length=6)
    
    avatar: Optional[ProfileImage] = None
    
    """  Opcional   
        created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc))
    
    updated_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        sa_column_kwargs={"onupdate": lambda: datetime.now(timezone.utc)}) 
    """
    
    role: Optional[RolesEnum]  = Field(default = RolesEnum.user)
    
    @field_validator('name')
    def validate_name(cls,value):
        if len(value)<3:
            raise ValueError("El nombre debe ser mayor de 3 caracteres")
        return value
    
class RegisterUser(User):
    pass

class LoginUser(BaseModel):
    email: EmailStr = Field(...)
    
    password: str = Field(...,min_length=6)
    pass