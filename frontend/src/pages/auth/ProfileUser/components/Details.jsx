import React from 'react'

const Details = () => {
  return (
    <>
        <div className='lg:w-1/2 sm:w-1/3 m-5'>
            {/* Detalles */}
            <div className='bg-gray-300 rounded-2xl m-2 p-5'>
                <div className='mb-5'>
                    <h1 className='font-Bitcount text-gray-500 text-xl'>Nombre:</h1>
                    <p className='text-2xl'>Antonio perez de la santa fe</p>
                </div>
                <div className=''>
                    <h1 className='font-Bitcount text-gray-500 text-xl'>Ubicación:</h1>
                    <p className='text-2xl'>vivo en mi casa no se qué</p>
                </div>
                
            </div>

            {/* Descripcion */}
            <div className='bg-gray-300 rounded-2xl m-2 p-5'>
                <h1 className='font-Bitcount text-gray-500 text-xl'>Descripción:</h1>
                <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>

            {/* Intereses */}
            <div className='bg-gray-300 rounded-2xl m-2 p-5'>
                <h1 className='font-Bitcount text-gray-500 text-xl'>Intereses:</h1>
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