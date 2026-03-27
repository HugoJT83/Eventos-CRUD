import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthButton from '../../../components/ui/AuthButton'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ROLE_TYPE } from '../../../constant/auth.constant'
import { axiosClient } from '../../../utils/axiosClient'
library.add(fas,far)
/* 
Para añadir un fontawesome:
<FontAwesomeIcon icon="fa-solid fa-house"></FontAwesomeIcon>
*/

const LoginUser = () => {

  const ValidationSchema = yup.object({
    'full-name': yup.string.required("El nombre y los apellidos son obligatorios"),
    'email':yup.string.required('El correo electrónico es obligatorio'),
    'password':yup.string.required('La contraseña es obligatoria').min(8, "La contraseña debe tener más de 8 caracteres"),
    role:yup.string.required("Role is Required").oneOf(Object.keys(ROLE_TYPE), "Elige un rol valido")
  })

  const onSubmitHandler = async(values,helpers)=>{
    const response = await axiosClient.post("/auth/register",{values})
    const data = response.data

    console.log(data)
    helpers.resetForm()
  }

  const initialValues = {
    'full-name':'',
    'email':'',
    'password':'',
    'role':ROLE_TYPE.USER
  }

  return (
    <>
      <Formik
        validationSchema={ValidationSchema}
        onSubmit={onSubmitHandler}
        initialValues={initialValues}
      >
        <Form className="text-gray-600 body-font">
        
        {/* Volver */}
        <Link to={'/'}>
        <button className='m-3 font-Bitcount hover:cursor-pointer text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          <FontAwesomeIcon icon='fa-solid fa-arrow-left' className='pr-2'></FontAwesomeIcon>
          Volver
        </button>
        </Link>

        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center flex-col">
          
          {/* Texto de presentacion */}
          <div className='lg:w-3/5 md:w-1/2 flex justify-center'>
            <div className=" md:pr-16 lg:pr-0 pr-0 text-center mb-10 pt-2">
              <h1 className="title-font font-medium text-2xl text-gray-900 font-Bitcount">Encuentra eventos de tu interés y conecta</h1>
              <p className="leading-relaxed mt-4">Accede a tus eventos publicados, o maneja los eventos a los que estás apuntado.</p>
            </div>
            <div class="m-5">
              <FontAwesomeIcon icon='fa-regular fa-lightbulb' class="w-full max-w-10 max-h-fit"></FontAwesomeIcon>
            </div>
          </div>

          {/* Crendenciales */}
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 mb-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Datos de usuario</h2>
            
            {/* Nombre y apellidos */}
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Nombre y Apellidos</label>
              <Field type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              <ErrorMessage name='name' className='text-red-500' component={'p'}/>
            </div>

            {/* Correo */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo Electrónico</label>
              <Field type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              <ErrorMessage name='email' className='text-red-500' component={'p'}/>
            </div>

            {/* Rol (testing) */}
            <div className='hidden'>
              <Field as="select" name="role" id="role">
                  <option value="USER"></option>
                  <option value="ADMIN" selected></option>
              </Field>
            </div>
            
            
            <AuthButton text={"Iniciar Sesión"}></AuthButton>
            <p className="text-xs text-gray-500 mt-3">¡Dale, sin miedo!</p>

            <div>
                <div className='mb-3 flex justify-center items-center gap-x-6'>
                  <div className='w-full h-[0.1000px] bg-gray-400'></div>
                  <div className='font-Bitcount'>OR</div>
                  <div className='w-full h-[0.1000px] bg-gray-400'></div>
                </div>
                <div className='mb-3 text-center'>
                  <p>
                    <span className='font-bold'>¿No tienes una cuenta?</span>  <Link to={'/register'} className='font-Bitcount text-indigo-600 hover:text-indigo-700'>Regístrate Aquí</Link>
                  </p>
                </div>
            </div>
          </div>
          
        </div>
      </Form>
      </Formik>

    </>
  )
}

export default LoginUser