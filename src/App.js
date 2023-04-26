import React from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Inicio } from "./components/Inicio"
import { Terapias } from "./components/Terapias"
import { Libros } from "./components/Libros"
import NavBar from "./components/NavBar/NavBar";
//import ProductList from "./components/ProductList";
//import Header from "./components/Header";
//import { useState } from "react";
import { Cursos } from "./components/Cursos";



function App() {;
  
  return (
  <BrowserRouter>
    <NavBar />
    
    


    <Routes>
    
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/terapias" element={<Terapias />} />
      <Route path="/cursos" element={<Cursos />} />
    </Routes>



  </BrowserRouter>


  );
}

export default App;
