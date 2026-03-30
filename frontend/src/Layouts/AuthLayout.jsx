import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import LoaderComponent from '../components/ui/LoaderComponent'
import { UserSlicePath } from '../redux/slice/user.slice'


const AuthLayout = () => {
  
  const user = useSelector(UserSlicePath)
  const [loading,setloading] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){


        navigate("/dashboard")
    }
    else{

        setloading(false)
    }
  },[user])



  if(loading){
    return <div class = 'h-screen flex justify-center items-center'>
        <LoaderComponent/>
    </div>
    }



  return (
    <>
        <Outlet></Outlet>
    </>
  )
}

export default AuthLayout