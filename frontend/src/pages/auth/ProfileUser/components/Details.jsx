import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../../../context/AuthContext'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { axiosClient } from '../../../../utils/axiosClient'

const Details = () => {

    /* Aparicion de botones */
    const [hoveredId,setHoveredId] = useState(null)
    const handleMouseOver = (id) => setHoveredId(id)
    const handleMouseOut = () => setHoveredId(null)

    /* Botones editables */
    const [editingId,setEditingId] = useState(null)
    const toggleEdit = (id) => {
        if(editingId === id){
            setEditingId(null)
        }else{
            setEditingId(id)
        }
    }


    /* Obtencion de datos */
    const {user,fetchUserProfile} = useAuthContext()
    const [initialValues,setInitialValues] = useState({
        name:user.name,
        description:user.description,
        interests:user.interests,
        address:{
            country: user.address?.country || "",
            state: user.address?.state || ""
        }
    })

    const validationSchema = yup.object({
        name: yup.string().required("El nombre es obligatorio").max(30, "el nombre no puede tener más de 30 caracteres"),
        address:yup.object({
            country: yup.string().max(20, "La ciudad no puede tener más de 20 caracteres"),
            state: yup.string().max(20, "La provincia no puede tener más de 20 caracteres")
        }),
        description: yup.string().max(500, "La descripción no puede tener más de 500 caracteres")
    })

    const onSubmitHandler =async(values,helpers)=>{

        const cleanValues = {
            ...values,
            name: values.name.trim(),
            address:{
                country: values.address.country.trim(),
                state: values.address.state.trim()
            },
            description: values.description.trim(),
        }

        try {

            const response = await axiosClient.put("/auth/update-details",cleanValues,{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem("token")
                }
            })
            const data = await response.data
            toast.success(data.msg)
            console.log(values)
            await fetchUserProfile()

        } catch (error) {
            toast.error(error.response.data.detail || error.message)
        }
    }

    useEffect(()=>{
        setInitialValues({
            name:user.name,
            email:user.email,
            description:user.description,
            address:user.address
        })
    },[user])

  return (
    <>
        <div className='lg:w-1/2 sm:w-1/3 m-5'>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
            >
                <Form>
                    {/* Detalles */}
                    <div 
                    onMouseOver={()=>handleMouseOver(1)} 
                    onMouseOut={handleMouseOut} 
                    className='bg-slate-50 rounded-2xl m-2 p-5 hover:scale-105 ease-in-out duration-150'
                    >

                        {/* Nombre */}
                        <div className='mb-5'>
                            <h1 htmlFor="name" className='font-Bitcount text-indigo-500 text-xl'>Nombre:</h1>
                            <div className='flex justify-between'>
                                {editingId === 1 ? 
                                    <>
                                        <Field 
                                        className="text-2xl bg-slate-100 border-2 border-indigo-400 p-1 rounded-xl focus:outline-indigo-700 " type="text" name="name" id="name"
                                        maxLength={30}
                                        />
                                        <ErrorMessage component={'p'} name='name' className='text-red-500'></ErrorMessage>
                                    </>:
                                        <p className='text-2xl'>{user.name}</p>
                                }
                                
                                {hoveredId === 1 ?  
                                    <>
                                        <button 
                                        type={editingId === 1 ? "button" :  "submit"} 
                                        onClick={()=>toggleEdit(1)} 
                                        className='animate-bounce'>
                                            <FontAwesomeIcon
                                                icon={editingId === 1 ? "fa-solid fa-check" :  "fa-solid fa-pencil" }
                                                className='text-indigo-400 hover:cursor-pointer hover:text-indigo-700 transition ease-in-out duration-200'/>
                                        </button>
                                    </> :
                                    <> </>
                                }
                            </div> 
                        </div>

                        {/* Ubicacion */}
                        <div className=''>
                            <h1 className='font-Bitcount text-indigo-500 text-xl'>Ubicación:</h1>
                            <div className='flex justify-between'>
                                {editingId === 2 ?
                                    <>
                                        <div className=''>
                                            <Field 
                                            className="text-2xl max-w-60 bg-slate-100 border-2 border-indigo-400 p-1 rounded-xl focus:outline-indigo-700" 
                                            type="text"
                                            placeholder="Ciudad"
                                            name="address.country"
                                            maxLength={20}
                                            />
                                            <ErrorMessage name="address.country" component={'p'} className='text-red-500'></ErrorMessage>
                                            <span className='text-xl text-indigo-400'> , </span>
                                            <Field
                                            className="text-2xl max-w-60 bg-slate-100 border-2 border-indigo-400 p-1 rounded-xl focus:outline-indigo-700"
                                            type="text"
                                            placeholder="Provincia"
                                            name="address.state"
                                            maxLength={20}
                                            />
                                            <ErrorMessage name="address.star" component={'p'} className='text-red-500'></ErrorMessage>
                                            <br />
                                            <span className='text-gray-400'>Puedes indicar ambas o solo una, como tu prefieras.</span>
                                        </div> 
                                        
                                    </>:
                                    <>
                                        {user.address && (user.address.country || user.address.state) ?
                                            <>
                                                <p className='text-2xl'>
                                                    {user.address.country && user.address.state ?
                                                        `${user.address.country}, ${user.address.state}`
                                                        : (user.address.country || user.address.state)
                                                    }    
                                                </p>
                                                
                                            </>:
                                            <>
                                                <p className='text-2xl text-gray-400'>¿Por dónde te das vida?</p>
                                            </>

                                        }
                                    </>
                                }
                                {hoveredId === 1 ?  
                                    <>
                                        <button
                                        type={editingId === 2 ? "button" :  "submit"} 
                                        onClick={()=>toggleEdit(2)}
                                         className='animate-bounce'>
                                            <FontAwesomeIcon
                                                icon={editingId === 2 ? "fa-solid fa-check" :  "fa-solid fa-pencil" }
                                                className='text-indigo-400 hover:cursor-pointer hover:text-indigo-700 transition ease-in-out duration-200'/>
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
                            <p className='font-Bitcount text-indigo-500 text-xl mr-1'>Sobre mí:</p>
                            {hoveredId === 2 ?  
                                <>
                                    <button
                                        type={editingId === 3 ? "button" :  "submit"} 
                                        onClick={()=>toggleEdit(3)}
                                         className='animate-bounce'>
                                            <FontAwesomeIcon
                                                icon={editingId === 3 ? "fa-solid fa-check" :  "fa-solid fa-pencil" }
                                                className='text-indigo-400 hover:cursor-pointer hover:text-indigo-700 transition ease-in-out duration-200'/>
                                        </button>
                                </> :
                                <> </>
                            }
                        </div>
                        {editingId === 3 ?
                            <>
                                <Field 
                                    as="textarea"
                                    rows="4"
                                    className="text-lg min-w-full bg-slate-100 border-2 border-indigo-400 p-1 rounded-xl focus:outline-indigo-700" 
                                    placeholder="Cuenta Lo que haces"
                                    name="description"
                                    maxLength={500}
                                />
                                <ErrorMessage name="description" component={'p'} className='text-red-500'></ErrorMessage>
                            </>:
                            <>
                                {user.description ?
                                    <>
                                        <p className='text-lg'>
                                            {user.description}
                                        </p>
                                    </>:
                                    <>
                                        <p className='text-lg text-gray-300'>
                                            ¿Qué puedes contar sobre tí?
                                        </p>
                                    </>
                                }
                            </>
                        }
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
                                    <button className='animate-bounce'>
                                        <FontAwesomeIcon id='edit' icon="fa-solid fa-pencil" className='text-indigo-400 hover:text-indigo-700 transition ease-in-out duration-200 hover:cursor-pointer'/>
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
                </Form>
            </Formik>
        </div>

    </>
  )
}

export default Details