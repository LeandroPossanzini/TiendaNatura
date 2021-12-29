import logo from './logo.svg';
import React from 'react';
import './App.css';
import  "./navBar";

function App() {
  return (
    <div className="App">
     <div class="headerContainer">
      <div class="logo">Tienda NATURA</div>
      <div class="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Mi Pedido</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
