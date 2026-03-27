import React from "react";
import { Routes,Route   } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginUser from "./pages/auth/LoginUser";
import RegisterUser from "./pages/auth/RegisterUser";
import MainLayout from "./Layouts/MainLayout";

const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" Component={MainLayout}> 
          <Route index Component={Home}/>
        </Route>
        <Route path="/login" Component={LoginUser}></Route>
        <Route path="/register" Component={RegisterUser}></Route>
      </Routes>
    <Footer/>
    </>
    
  )
}

export default App