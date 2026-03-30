## Para crear un entorno virtual 

```bash

pyhton -m venv venv

```

## Para iniciar el servidor en localhost:8000

"main" y "app" vienen del archivo .py creado y de la directiva app dentro de este (*app = FastAPI()*).

```bash

uvicorn main:app --reload

```