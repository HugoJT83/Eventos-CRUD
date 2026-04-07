import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import FloatingMenu from '../components/FloatingMenu'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <Outlet></Outlet>
        <Footer/>
        <FloatingMenu/>
    </>
  )
}

export default MainLayout