import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import LoaderComponent from '../components/ui/LoaderComponent'
import { UserSlicePath } from '../redux/slice/user.slice'


const ProtectedLayout = () => {
  
  const user = useSelector(UserSlicePath)
  const [loading,setloading] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){


        navigate("/login")
    }
    else{

        setloading(false)
    }
  },[user])



  if(loading){
    return <div className = 'h-screen flex justify-center items-center'>
        <LoaderComponent/>
    </div>
    }



  return (
    <>
        <Outlet></Outlet>
    </>
  )
}

export default ProtectedLayout