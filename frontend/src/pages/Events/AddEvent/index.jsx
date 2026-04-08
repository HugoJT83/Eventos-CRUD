import { Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'

const addEvent = () => {
  return (
    <>
        <div className='py-10 rounded px-4 bg-white-to-black border-2 border-indigo-to-yellow m-5'>
            
            <Formik>
                {({values, setFieldValue}) =>(
                    <Form>
                        <div>
                            <p>elemento 1</p>
                            <input type="text" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </>
  )
}

export default addEvent