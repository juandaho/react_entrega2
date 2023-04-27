import React from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Terapias } from "./components/Terapias";
import NavBar from "./components/NavBar/NavBar";
import { Cursos } from "./components/Cursos";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/terapias" element={<Terapias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
