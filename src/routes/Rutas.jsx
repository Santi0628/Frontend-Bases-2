import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "../components/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CrearExamen } from "../components/CrearExamen"
import Ingreso from "../components/Ingreso";

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Header />

            {/* CONTENIDO CENTRAL Y RUTAS */}
                <Routes>
                    <Route path="/" element={<Ingreso />}/>
                    <Route path="/ingreso" element={<Ingreso />}/>
                    <Route path="/home_profesor" element={<Home/>}/>
                    <Route path="/home_profesor/crear_examen" element={<CrearExamen/>}/>
                </Routes>

            <Footer />

        </BrowserRouter>
    );
}