import React from 'react'
import logo from '../assets/app_logo.svg'
import { Link, useLocation } from 'react-router-dom'

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import { UserSlicePath } from '../redux/slice/user.slice'
import { useAuthContext } from '../context/AuthContext'
library.add(fas,far)
/* 
Para añadir un fontawesome:
<FontAwesomeIcon icon="fa-solid fa-house"></FontAwesomeIcon>
*/

const Header = () => {

    const user = useSelector(UserSlicePath)
    const {logoutUser} = useAuthContext()

    const {pathname} = useLocation()
    const protectedRoute = ['/dashboard','/profile']

  return (
    <>
        <header className="text-gray-600 body-font">
            <div className="flex min-w-full justify-between p-5">
                
                
                {/* Logo */}
                <Link to={'/'} className="flex items-center max-w-15">
                <img src={logo} className='' alt="" />
                <span className="text-3xl font-Bitcount mt-2 ml-2">Eventos</span>
                </Link>
                
                {/* Botones */}
                <div className='flex items-center'>
                    
                    {/* Boton registrarse */}
                    {user ?
                    <>
                        <Link to={'/dashboard'}>
                            <button className="bg-indigo-500 rounded-lg p-2 flex align-middle items-center text-white transition ease-in-out hover:bg-gray-300 m-2 hover:cursor-pointer">
                                Dashboard
                                <FontAwesomeIcon icon="fa-regular fa-rectangle-list" className='p-1'></FontAwesomeIcon>
                            </button>
                        </Link>
                    </>:
                        <Link to={'/register'}>
                            <button className="bg-gray-200 rounded-lg p-2 flex items-center transition ease-in-out hover:bg-gray-300 m-2 hover:cursor-pointer">
                                Registrarse
                                <FontAwesomeIcon icon="fa-regular fa-user" className='p-1'></FontAwesomeIcon>
                            </button>
                        </Link>}

                    {/* Boton login/logout */}
                    {user ? 
                    <>
                        <button onClick={logoutUser} className="bg-gray-200 rounded-lg p-2 flex items-center transition ease-in-out hover:bg-gray-300 m-2 hover:cursor-pointer">Cerrar sesión
                            <FontAwesomeIcon icon="fa-regular fa-truck" className='p-1'></FontAwesomeIcon>
                        </button>
                    </>:
                        <Link to={'/login'}>
                            <button className="bg-gray-200 rounded-lg p-2 flex items-center transition ease-in-out hover:bg-gray-300 m-2 hover:cursor-pointer">Iniciar Sesión
                                <FontAwesomeIcon icon="fa-regular fa-truck" className='p-1'></FontAwesomeIcon>
                            </button>
                        </Link>}
                

                </div>
                
            </div>
        </header>

    </>
  )
}

export default Header