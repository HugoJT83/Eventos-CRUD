import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)
import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">

          
          <div class="flex flex-wrap -m-4">

            {/* Contenedor 1 - Ver eventos */}
            <div class="p-4 lg:w-1/3">
            <Link to={'/events'}>
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:text-white hover:cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" className='text-6xl m-3'/>
                <h1 class="sm:text-2xl text-xl font-medium mb-3 font-Bitcount mt-2">Ver eventos disponibles</h1>
                <p class="leading-relaxed mb-3">Consulta los eventos programados por otras personas, tanto cerca de tí como aplicando filtros por zona. <span className='font-bold'>¡No te pierdas nada!</span></p>
              </div>
            </Link>
            </div>

            {/* Contenedor 2 - Crear Eventos */}
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:text-white hover:cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-calendar-plus" className='text-6xl m-3'/>
                <h1 class="title-font sm:text-2xl text-xl font-medium mb-3 font-Bitcount mt-2">Crear un evento</h1>
                <p class="leading-relaxed mb-3">Crea un evento: elige una actividad, indica la temática, pon una fecha y una hora y nosotros nos encargaremos del resto. <span className='font-bold'>Busca gente con tus mismos intereses</span> cerca de tí. </p>
              </div>
            </div>

            {/* Contenedor 3 - Mi perfil*/}
            
            <div class="p-4 lg:w-1/3">
              <Link to={'/profile'}>
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:text-white hover:cursor-pointer">
                  <FontAwesomeIcon icon="fa-solid fa-circle-user" className='text-6xl m-3'/>
                  <h1 class="title-font sm:text-2xl text-xl font-medium mb-3 font-Bitcount mt-2">Mi perfil</h1>
                  <p class="leading-relaxed mb-3">Edita tu información personal, así como tus intereses. Podrás tanto <span className='font-bold'>gestionar tus eventos</span> publicados como consultar a los que estás apuntado; ¡Todo en uno! </p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
