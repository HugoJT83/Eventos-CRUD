import React from "react";
import { Routes,Route   } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <> 
    <Header/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </>
    
  )
}

export default App