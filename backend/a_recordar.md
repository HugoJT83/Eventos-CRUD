## Para crear un entorno virtual 

```bash

pyhton -m venv venv

```

## Para iniciar el servidor en localhost:8000

"main" y "app" vienen del archivo .py creado y de la directiva app dentro de este (*app = FastAPI()*).

```bash

uvicorn main:app --reload

```

## Si se quedan procesos Zombi en los puertos

Si las peticiones al servidor se quedan "pending", una posible causa es que los puertos se han quedado ocupados tras
cerrar los servicios. En tal caso, comprobar los puertos ocupados y eliminarlos si es necesario.

**Comprobar los puertos:**
```bash

netstat -ano | findstr :8000
netstat -ano | findstr :5173

```

**Eliminar los servicios:**
```bash

taskkill /F /PID 40000 

```