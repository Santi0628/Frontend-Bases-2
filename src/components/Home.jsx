import React from 'react';
import './App.css';
import { Link } from "react-router-dom"

export const Home = () => {
  
    const grupos = [
      { id: 1, nombre: "Estructuras Diurno 01" },
      { id: 2, nombre: "Elixir Diurno 01" },
      { id: 3, nombre: "Datos Diurno 01" },
      { id: 4, nombre: "Infra Diurno 01" },
      { id: 5, nombre: "Algoritmos Diurno 01" },
      { id: 6, nombre: "Economía Diurno 01" },
      { id: 7, nombre: "Economía Diurno 01" },
      { id: 8, nombre: "Economía Diurno 01" },
      { id: 9, nombre: "Economía Diurno 01" },
      { id: 10, nombre: "Economía Diurno 01" },
    ];
  
  return (
    <div className="App">
      <main>
        <h1>Mis Grupos</h1>
        <div className="groups-container">
          {grupos.map((grupo) => (
            <div key={grupo.id} className="group-card">
              <img src="reading.png" alt="estudiando" className="group-image" />
              <h2>{grupo.nombre}</h2>
              <Link to="/crear_examen" className='button'>Ver</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 
