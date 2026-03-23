from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def welcome():
    return { 'message' : 'hola'}

#get
@app.get('/api/events')
async def get_events():
    return 'todos los eventos'

@app.get("/api/events/{event}")
async def get_event():
    return 'un evento'

#post
@app.post('/api/events')
async def create_event():
    return 'crear evento'

#put
@app.put('/api/events/{event}')
async def update_event():
    return 'actualizado evento'

#delete
@app.delete('/api/events/{event}')
async def delete_event():
    return 'borrar evento'

