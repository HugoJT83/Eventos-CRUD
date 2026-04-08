import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { INTERESTS_CONFIG } from '../../../constant/interestsConfig'
import Interest from '../../auth/ProfileUser/components/Interest'
library.add(fas,far)

const addEvent = () => {


    const [isFocused,setIsFocused] = useState(false)
    const [editing,setEditing] = useState(false)
    
    const toggleEdit = () =>{
        setEditing(!editing)
    }

    const [initialValues,setInitialValues] = useState({
        interests:[]
    })
    const validationSchema = yup.object({
        /* TODO */
    })

    const onSubmitHandler = async(values, helpers) =>{


    }
  
    return (
    <>
        <div className='py-10 rounded-xl px-4 bg-white-to-black border-2 border-indigo-to-yellow m-5'>
            
            <h1 className='text-center m-4 text-6xl text-indigo-to-yellow font-Bitcount'>Crea un evento</h1>      
            
            {/* Separador */}
            <div className='mb-6 mt-6 flex justify-center items-center gap-x-6'>
                <div className='w-1/7 h-[2px] bg-indigo-to-yellow'></div>
                <div>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" className='text-indigo-to-yellow'></FontAwesomeIcon>
                </div>
                <div className='w-1/7 h-[2px] bg-indigo-to-yellow'></div>
            </div>
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
            >
            {({values,setFieldValue}) =>(

            
                    <Form className='justify-center flex'>
                        <div className='bg-lightgray-to-black p-6 w-200 rounded border-2 border-indigo-to-yellow'>
                            
                            {/* Grupo 1 - titulo y teléfono */}
                            <div className='grid grid-cols-1 md:grid-cols-2 items-end'>
                                {/* Titulo */}
                                <div className=' p-2'>
                                    <h1 htmlFor="title" className='text-2xl m-1 font-Bitcount text-indigo-to-yellow'>Título</h1>
                                    <Field
                                     type="text" 
                                     name="title" 
                                     id="title" 
                                     className="bg-white-to-black rounded border-2 p-1 border-indigo-to-yellow w-full"></Field>
                                    <ErrorMessage component={'p'} name='title' className='text-red-500'></ErrorMessage>
                                </div>
                                
                                {/* Teléfono */}
                                <div className=' p-2'>
                                    <h1 htmlFor="phone" className='text-2xl m-1 font-Bitcount text-indigo-to-yellow'>Número de teléfono</h1>
                                    <Field 
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="+34 222 333 444"
                                        className="bg-white-to-black rounded border-2 border-indigo-to-yellow w-full p-1"
                                    />
                                    <ErrorMessage component={'p'} name='phone' className='text-red-500'></ErrorMessage>
                                </div>
                            </div>
                            

                            {/* Descripción */}
                            <div className='p-2'>
                                
                                <h1 htmlFor="description" className='text-2xl m-1 font-Bitcount text-indigo-to-yellow'>
                                    Descripción del evento
                                </h1>
                                {isFocused ? 
                                <h2 className='italic text-sm text-center m-2'>
                                    Añade una pequeña descripción del evento; puedes indicar detalles como para quién va dirigido, qué se va a realizar o cual es el objetivo de este.
                                </h2> : null
                                }
                                <Field 
                                    as="textarea"
                                    rows="4"
                                    onFocus={()=> setIsFocused(true)}
                                    onBlur={()=>setIsFocused(false)}
                                    className="w-full bg-white-to-black border-2 border-indigo-to-yellow rounded"
                                    name="description"
                                    maxLength={500}
                                />
                                <ErrorMessage name='description' component={'p'} className='text-red-500'/>
                            </div>

                            {/* Fecha de creación -> oculto, toma la fecha de ahora */}
                            
                            {/* grupo 2 - fecha e intereses */}
                            <div className='grid grid-cols-1 md:grid-cols-2'>

                                {/* Fecha del evento */}
                                <div className='p-2'>
                                    <h1 htmlFor="event_date" className='text-2xl m-1 font-Bitcount text-indigo-to-yellow'>
                                        Fecha del evento
                                    </h1>
                                    <Field
                                        type="date"
                                        name="event_date"
                                        id="event_date"
                                        className=""
                                    />
                                    <ErrorMessage name="event_date" component={'p'} className='text-red-500'/>
                                </div>

                                {/* Intereses */}
                                <div className='p-2'>
                                    <h1 htmlFor="event_date" className='text-2xl m-1 font-Bitcount text-indigo-to-yellow'>
                                        Temática
                                    </h1>
                                    {editing ? 
                                        <>
                                            <p className='italic p-2 text-black-to-white text-center'>Puedes seleccionar hasta 3 temas que definan tu evento.</p>
                                            <div className='grid grid-cols-3 md:grid-cols-4 gap-3 p-5 pt-7 sm:grid-cols-3 mb-2 bg-white rounded-2xl border-2 border-indigo-to-black'>
                                            {Object.entries(INTERESTS_CONFIG).map(([key,config]) =>{
                                                const isSelected = values.interests.includes(key);

                                                return(
                                                
                                                    <Interest
                                                        key={key}
                                                        icon={config.icon}
                                                        label={config.label}
                                                        selectable={true}
                                                        isSelected={isSelected}
                                                        onClick={ ()=>{
                                                            if(isSelected){
                                                            const next = values.interests.filter(i=> i !== key);
                                                            setFieldValue('interests',next);
                                                            } else if (values.interests.length < 3){
                                                                setFieldValue('interests',[...values.interests, key]);
                                                            }
                                                        }}
                                                    ></Interest>
                                                
                                                )
                                            })}
                                            </div>
                                        </>:
                                        <>
                                            {values.interests && values.interests.length > 0 ?
                                            <>
                                                <div className='grid grid-cols-3 gap-3 p-5 pt-7 sm:grid-cols-3 mb-2 bg-white rounded-2xl border-2 border-indigo-to-black'>
                                                    {values.interests?.map((key)=>{
                                                        const config = INTERESTS_CONFIG[key];

                                                        return config ? 
                                                        
                                                            <Interest
                                                                key={key}
                                                                icon={config.icon}
                                                                label={config.label}
                                                                selectable={false}
                                                            />
                                                        :null;
                                                    })}
                                                </div>
                                            </>:
                                            null
                                            }
                                        </>
                                    }
                                    <button
                                        onClick={()=>toggleEdit()}
                                        type='button'
                                        className='bg-indigo-to-yellow w-full border text-white-to-black rounded-2xl  p-2 border-indigo-to-yellow hover:cursor-pointer hover:scale-110 transition ease-in-out'
                                    >
                                            {editing? "Cerrar menú" : "Selecciona los temas" }
                                    </button>

                                </div>
                            </div>
                            

                            {/* ubicacion */}
                            <div>
                                {/* calle */}
                                <div>

                                </div>

                                {/* Ciudad */}
                                <div>

                                </div>

                                {/* provincia */}
                                <div>

                                </div>

                                {/* codigo postal */}
                                <div>

                                </div>
                            </div>

                            {/* Intereses -> Importar interes */}
                            <div>

                            </div>

                            {/* Imágenes */}
                            <div>

                            </div>
                        </div>
                    </Form>
            )}
            </Formik>
        </div>
    </>
  )
}

export default addEvent