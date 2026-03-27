import React from "react";
import { Routes,Route   } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <> 
    <Header/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    <Footer/>
    </>
    
  )
}

export default App