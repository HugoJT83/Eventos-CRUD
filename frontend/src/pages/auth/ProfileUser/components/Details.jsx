import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

import React, { useState } from 'react'

const Details = () => {
    const [hoveredId,setHoveredId] = useState(null)

    const handleMouseOver = (id) => setHoveredId(id);
    const handleMouseOut = () => setHoveredId(null);

  return (
    <>
        <div className='lg:w-1/2 sm:w-1/3 m-5'>
            {/* Detalles */}
            <div 
            onMouseOver={()=>handleMouseOver(1)} 
            onMouseOut={handleMouseOut} 
            className='bg-slate-50 rounded-2xl m-2 p-5 hover:scale-105 ease-in-out duration-150'
            >
                <div className='mb-5'>
                    <h1 className='font-Bitcount text-indigo-500 text-xl'>Nombre:</h1>
                    <div className='flex justify-between'>
                        <p className='text-2xl'>Perico de los palotes</p>
                        {hoveredId === 1 ?  
                            <>
                                <button>
                                    <FontAwesomeIcon id='edit' icon="fa-solid fa-pencil" className='text-indigo-400 hover:cursor-pointer'/>
                                </button>
                            </> :
                            <> </>
                        }
                    </div>
                    
                </div>
                <div className=''>
                    <h1 className='font-Bitcount text-indigo-500 text-xl'>Ubicación:</h1>
                    <div className='flex justify-between'>
                        <p className='text-2xl'>Fuenlabrada, Torremolinos</p>
                        {hoveredId === 1 ?  
                            <>
                                <button>
                                    <FontAwesomeIcon id='edit' icon="fa-solid fa-pencil" className='text-indigo-400 hover:cursor-pointer'/>
                                </button>
                            </> :
                            <> </>
                        }
                    </div>
                </div>
                
            </div>

            {/* Descripcion */}
            <div 
            onMouseOver={()=>handleMouseOver(2)} 
            onMouseOut={handleMouseOut}
            className='bg-slate-50 rounded-2xl m-2 p-5 hover:scale-105 ease-in-out duration-150'
            >
                <div className='flex'>
                    <p className='font-Bitcount text-indigo-500 text-xl mr-1'>Descripción:</p>
                    {hoveredId === 2 ?  
                        <>
                            <button>
                                <FontAwesomeIcon id='edit' icon="fa-solid fa-pencil" className='text-indigo-400 hover:cursor-pointer'/>
                            </button>
                        </> :
                        <> </>
                    }
                </div>
                <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>

            {/* Intereses */}
            <div 
            onMouseOver={()=>handleMouseOver(3)} 
            onMouseOut={handleMouseOut}
            className='bg-slate-50 rounded-2xl m-2 p-5 hover:scale-105 ease-in-out duration-150'
            >
                <div className='flex'>
                    <p className='font-Bitcount text-indigo-500 text-xl mr-1'>Intereses:</p>
                    {hoveredId === 3 ?  
                        <>
                            <button>
                                <FontAwesomeIcon id='edit' icon="fa-solid fa-pencil" className='text-indigo-400 hover:cursor-pointer'/>
                            </button>
                        </> :
                        <> </>
                    }
                </div>
                <div className='flex justify-around p-2'>
                    <p>Interes 1</p>
                    <p>Interes 2</p>
                    <p>Interes 3</p>
                    <p>Interes 4</p>
                </div>
            </div>



        </div>

    </>
  )
}

export default Details