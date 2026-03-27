import React from 'react'
import logo from '../assets/app_logo.svg'

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

const Header = () => {
  return (
    <>
        <header className="text-gray-600 body-font">
            <div className="flex min-w-full justify-between p-5">
                <a className="flex items-center max-w-15">
                    <img src={logo} className='' alt="" />
                    <span className="text-3xl font-Bitcount mt-2 ml-2">Eventos</span>
                </a>
                
                <div className='flex items-center'>
                <button className="bg-gray-200 rounded-lg p-2 flex items-center hover:bg-gray-300 m-2 hover:cursor-pointer">
                    Registrarse
                    <FontAwesomeIcon icon="fa-regular fa-user" className='p-1'></FontAwesomeIcon>
                </button>

                <button className="bg-gray-200 rounded-lg p-2 flex items-center hover:bg-gray-300 m-2 hover:cursor-pointer">Iniciar Sesión
                    <FontAwesomeIcon icon="fa-regular fa-truck" className='p-1'></FontAwesomeIcon>
                </button>

                </div>
                
            </div>
        </header>

    </>
  )
}

export default Header