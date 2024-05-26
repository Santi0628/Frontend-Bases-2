import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "../components/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CrearExamen } from "../components/CrearExamen"
import IngresoProfesor from "../components/IngresoProfesor";
import IngresoEstudiante from "../components/IngresoEstudiante";
import LoginChoice from "../components/LoginChoise";

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Header />

            {/* CONTENIDO CENTRAL Y RUTAS */}
                <Routes>
                    <Route path="/" element={<LoginChoice />}/>
                    <Route path="/profesor" element={<IngresoProfesor />}/>
                    <Route path="/estudiante" element={<IngresoEstudiante />}/>
                    <Route path="/home_profesor/:id" element={<Home/>}/>
                    <Route path="/home_profesor/crear_examen" element={<CrearExamen/>}/>
                </Routes>

            <Footer />

        </BrowserRouter>
    );
}