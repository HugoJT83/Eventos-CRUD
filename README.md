# MAZE App

<div align="center">
    <img src="./frontend/public/imgs/app_logo.ico">
</div>

<div align="center">

![Static Badge](https://img.shields.io/badge/Desarrollo_Aplicaciones_Web-blue)


![Static Badge](https://img.shields.io/badge/Python-yellow?logo=python)

![Static Badge](https://img.shields.io/badge/React-purple?logo=react)

![Static Badge](https://img.shields.io/badge/FastAPI-green?logo=fastapi)

![Static Badge](https://img.shields.io/badge/TailwindCSS-white?logo=tailwindcss)

![Static Badge](https://img.shields.io/badge/FontAwesome-red?logo=fontawesome&logoColor=yellow)

![Static Badge](https://img.shields.io/badge/MongoDB-black?logo=mongodb)

![Static Badge](https://img.shields.io/badge/Cloudinary-lightblue?logo=cloudinary)

![Static Badge](https://img.shields.io/badge/JavaScript-darkred?logo=javascript&logoColor=white)



</div>

MAZE App es una aplicación web desarrollada como proyecto intermodular de final de Grado Superior de Desarrollo de Aplicaciones web. 

---

## 1. Acerca del proyecto

La aplicación se ha desarrollado con las siguientes tecnologías:

1. _Backend_:
   - **Python**: Lenguaje principal de programación del entorno servidor, a través del framework **FastAPI**.
   - **MongoDB**: Base de datos de la aplicación, utilizando el servicio en la nube de MongoDB Atlas.
   - **Cloudinary**:  Base de datos de elementos multimedia, a través de su servicio en la nube.

2. _Frontend_:
    - **React**: Framework de desarrollo en **Javascript** para el UI.
    - **TailwindCSS**: Framework de hojas de estilo CSS.
    - **FontAwesome**: Librería de iconos.

---

## 2. Ejecución

La aplicación se puede ejecutar de forma local considerando las siguientes anotaciones:

- Se requieren cuentas en los respectivos servicios en la nube como MongoDB o Cloudinary; en el caso de MongoDB, se puede utilizar de forma local a través de MongoDB Community Server.

- La aplicación utiliza variables de entorno para el almacenamiento de credenciales; fuese a utilizarse, debiérase renombrarse el archivo ".env.example" existente en la carpeta "backend" a ".env", introduciendo en ella las credenciales propias.

- Todas las dependencias utilizadas en el backend quedan especificadas en el archivo "requirements.md" del directorio "backend"; estas deben ejecutarse en consola desde el directorio indicado.

- Todas las dependendias utilizadas en el frontend se pueden descargar utilizando el siguiente comando desde una terminal en el directorio "frontend":
```
    npm install
```

- Los siguientes comandos deben ser ejecutados desde sus respectivos directorios para levantar los servicios:

    - directorio "frontend":

    ```
        npm run dev
    ```  

    - directorio "backend":

    ```
        uvicorn app:app --reload
    ```

---



