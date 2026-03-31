import React from "react";
import { Routes,Route   } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginUser from "./pages/auth/LoginUser";
import RegisterUser from "./pages/auth/RegisterUser";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import { Dashboard } from "./pages/Dashboard";
import ProtectedLayout from "./Layouts/ProtectedLayout";
import ProfileUser from "./pages/auth/ProfileUser";

const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" Component={MainLayout}> 
          <Route index Component={Home}/>

          <Route Component={ProtectedLayout}>

          <Route path='/dashboard' Component={Dashboard}/>

          <Route path='/profile' Component={ProfileUser}/>
          </Route>
          
        </Route>

        

        <Route Component={AuthLayout}>
          <Route path="/login" Component={LoginUser}/>
          <Route path="/register" Component={RegisterUser}/>
        </Route>

        

      </Routes>
    <Footer/>
    </>
    
  )
}

export default App