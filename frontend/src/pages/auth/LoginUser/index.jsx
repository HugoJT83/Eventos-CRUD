import React from 'react'
import { Link } from 'react-router-dom'

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)
/* 
Para añadir un fontawesome:
<FontAwesomeIcon icon="fa-solid fa-house"></FontAwesomeIcon>
*/

const LoginUser = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <Link to={'/'}>
        <button className='m-3 font-Bitcount hover:cursor-pointer text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          <FontAwesomeIcon icon='fa-solid fa-arrow-left' className='pr-2'></FontAwesomeIcon>
          Volver
        </button>
        </Link>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center flex-col">
          <div className='lg:w-3/5 md:w-1/2 flex justify-center'>
            <div className=" md:pr-16 lg:pr-0 pr-0 text-center mb-10 pt-2">
              <h1 className="title-font font-medium text-2xl text-gray-900 font-Bitcount">Encuentra eventos de tu interés y conecta</h1>
              <p className="leading-relaxed mt-4">Accede a tus eventos publicados, o maneja los eventos a los que estás apuntado.</p>
            </div>
            <div class="m-5">
              <FontAwesomeIcon icon='fa-regular fa-lightbulb' class="w-full max-w-10 max-h-fit"></FontAwesomeIcon>
            </div>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 mb-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Datos de usuario</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Nombre y Apellidos</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            
            <button className="font-Bitcount hover:cursor-pointer text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Iniciar sesión
            </button>
            <p className="text-xs text-gray-500 mt-3">¡Dale, sin miedo!</p>
          </div>
          
        </div>
      </section>

    </>
  )
}

export default LoginUser