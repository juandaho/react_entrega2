import React from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Inicio } from "./components/Inicio"
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
  <BrowserRouter>
    <NavBar />
    <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}


    />

    <ProductList
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}

    />

    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>

    <footer>

    </footer>
  </BrowserRouter>

  );
}

export default App;
