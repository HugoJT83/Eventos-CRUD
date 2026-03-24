from pydantic import BaseModel,Field, EmailStr,field_validator
from datetime import datetime, timezone
from typing import Optional
from enum import Enum

class RolesEnum(str,Enum):
    user="user"
    admin="admin"


class User(BaseModel):
    
    name: str = Field(...)
    
    email: EmailStr = Field(...)
    
    password: str = Field(...,min_length=6)
    
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