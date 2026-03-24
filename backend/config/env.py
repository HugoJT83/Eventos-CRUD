from dotenv import load_dotenv
import os
load_dotenv()

class ENVConfig:
    
    MONGO_CONNECTION = os.getenv("MONGO_CONNECTION","")
    MONGO_DB = os.getenv("MONGO_DB","")