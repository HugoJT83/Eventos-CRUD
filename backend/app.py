from fastapi import FastAPI
from routes.authRoute import router as AuthRouter

app = FastAPI(title = "Event Manager")

#Routes
app.include_router(AuthRouter)

@app.get('/')
def welcome():
    return {
        'message' : 'hola'
    }
