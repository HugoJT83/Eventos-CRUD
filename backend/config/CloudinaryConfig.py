import cloudinary
import cloudinary.uploader
from config.env import ENVConfig


cloudinary.config(
   cloud_name = ENVConfig.CLOUDINARY_URL,
   api_key=ENVConfig.API_KEY_CLOUDINARY,
   api_secret=ENVConfig.API_SECRET_CLOUDINARY
)