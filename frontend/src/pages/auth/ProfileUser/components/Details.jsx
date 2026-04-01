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
        description:user.descritpion,
        interests:user.interests,
        address:{
            country: user.address?.country || "",
            state: user.address?.state || ""
        }
    })

    const validationSchema = yup.object({
        name: yup.string().required("El nombre es obligatorio"),
    })

    const onSubmitHandler =async(values,helpers)=>{
        try {
            console.log

            const response = await axiosClient.put("/auth/update-details",values,{
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
                                        <Field className="text-2xl bg-slate-100 border-2 border-indigo-400 p-1 rounded-xl focus:outline-indigo-700 " type="text" name="name" id="name"/>
                                    </>:
                                        <p className='text-2xl'>{user.name}</p>
                                }
                                <ErrorMessage component={'p'} name='name' className='text-red-500'></ErrorMessage>
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
                                            />
                                            <span className='text-xl text-indigo-400'> , </span>
                                            <Field
                                            className="text-2xl max-w-60 bg-slate-100 border-2 border-indigo-400 p-1 rounded-xl focus:outline-indigo-700"
                                            type="text"
                                            placeholder="Provincia"
                                            name="address.state"
                                            />
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
                                    <button className='animate-bounce'>
                                        <FontAwesomeIcon id='edit' icon="fa-solid fa-pencil" className='text-indigo-400 hover:text-indigo-700 transition ease-in-out duration-200 hover:cursor-pointer'/>
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