import React, { useState } from 'react'
import {useAccessibility} from '../context/AccessibilityContext'

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)


const FloatingMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {config, setConfig} = useAccessibility();


  return (
    <div className='fixed bottom-12 right-12 z-9999'>
        {/* Cuadro de ajustes de accesibilidad */}
        {isOpen && (

                <div className='absolute bottom-16 right-0 w-64 bg-white-to-black border-2 border-indigo-to-yellow rounded-2xl'>
                    <h3 className='text-indigo-to-yellow p-2 text-center'>Accesibilidad</h3>

                    <div className='mb-3 flex justify-center items-center gap-x-6'>
                        <div className='w-20 h-0.5 bg-indigo-to-yellow'></div>
                    </div>

                    {/* Tamaño de la fuente */}
                    <div>
                        <p className='ml-2'>Tamaño de los elementos</p>
                        <div className='flex gap-2 p-2'>
                            {['small','medium','large'].map(s => (
                                <button
                                    key={s}
                                    onClick={()=> setConfig({...config, fontSize: s})}
                                    className={`border-indigo-to-yellow border-2 hover:cursor-pointer flex-1 text-xs py-1 rounded-2xl
                                         ${config.fontSize === s ? 'bg-indigo-to-yellow text-white-to-black' : 'bg-white-to-black'}`}
                                >
                                    {s[0].toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className='ml-2'>Contraste</p>
                        <div className='flex gap-2 p-2'>
                            <button 
                                onClick={() => setConfig({...config, highContrast: !config.highContrast})}
                                className="w-full text-left text-sm py-2 hover:cursor-pointer border-2 border-indigo-to-yellow rounded-2xl p-2 flex justify-between items-center"
                            >
                                <p className='text-black-to-white'>{config.highContrast ? 'Activado' : 'Activar'}</p>
                                {config.highContrast ? <FontAwesomeIcon icon="fa-solid fa-check" className="text-green-500" /> : null}
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className='ml-2'>Ayuda a la dislexia</p>
                        <div className='flex gap-2 p-2'>
                            <button 
                                onClick={() => setConfig({...config, dyslexicFont: !config.dyslexicFont})}
                                className="w-full text-left text-sm py-2 hover:cursor-pointer border-2 border-indigo-to-yellow rounded-2xl p-2 flex justify-between items-center"
                            >
                                <p className='text-black-to-white'>{config.dyslexicFont ? 'Activado' : 'Activar'}</p>
                                {config.dyslexicFont ? <FontAwesomeIcon icon="fa-solid fa-check" className="text-green-500" /> : null}
                            </button>
                        </div>
                    </div>
                </div>       
        )}

        {/* Boton desplegable de accesibilidad */}
        <button
            onClick={()=>setIsOpen(!isOpen)}
            className='w-10 h-10 items-center justify-center flex bg-white-to-black border-indigo-to-yellow border-2 rounded-full text-indigo-to-yellow hover:scale-120 hover:cursor-pointer transition ease-in-out'
        >
            <FontAwesomeIcon icon={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-universal-access"}></FontAwesomeIcon>

        </button>
    </div>
  )
}

export default FloatingMenu