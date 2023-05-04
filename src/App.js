import React from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
      <ItemListContainer gretting={"Bienvenido a la tienda"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
