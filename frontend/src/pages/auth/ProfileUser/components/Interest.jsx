import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

const Interest = ({icon, label, isSelected, onClick, selectable = false}) => {
  
  return (
    <>
    <div className="flex flex-col items-center ">

      {/* Fondo + funcionalidad */}
      <div 
      onClick={selectable ? onClick : null}
      className={`bg-indigo-to-yellow text-white-to-black p-3 relative rounded-full content items-center transition-all duration-200
        ${selectable ? 'cursor-pointer':''}`}
      >
        {/* Si está seleccionado */}
        {isSelected && selectable &&(
          <div className='absolute -top-1 -right-1 bg-green-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]'>
            <FontAwesomeIcon icon="fa-solid fa-check"/>
          </div>
        )}

          {/* Icono */}
          <div className='w-5 h-5 flex items-center content-center'>
              <FontAwesomeIcon icon={icon}/>
          </div>
      </div>

      {/* texto */}
      <p className='text-center font-Bitcount text-indigo-to-black'>{label}</p>
    </div>
    </>
  )
}

export default Interest