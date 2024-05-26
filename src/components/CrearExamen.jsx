import React, { useState } from 'react';
import '../components/CrearExamen.css'; // Archivo de estilos CSS para el componente

export const CrearExamen = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidadPreguntas, setCantidadPreguntas] = useState(0);
  const [cantidadAlumno, setCantidadAlumno] = useState(0);
  const [tiempoLimite, setTiempoLimite] = useState('');
  const [programado, setProgramado] = useState(false);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      descripcion,
      categoria,
      cantidadPreguntas,
      cantidadAlumno,
      tiempoLimite,
      programado,
      fecha,
      hora
    });
  };

  return (
    <div className="contenido">
      <h2 className='texto'>Crear Examen</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

        <label htmlFor="categoria">Categoría:</label>
        <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          <option value="">Seleccione una categoría</option>
          <option value="Facultad de Ingeniería">Facultad de Ingeniería</option>
          <option value="Programa de Ingeniería de Sistemas y Computación">Programa de Ingeniería de Sistemas y Computación</option>
          <option value="Curso: Bases de Datos II">Curso: Bases de Datos II</option>
          <option value="Proyecto Final 2024-1">Proyecto Final 2024-1</option>
        </select>

        <label htmlFor="cantidadPreguntas">Cantidad de preguntas en el banco:</label>
        <input type="number" id="cantidadPreguntas" value={cantidadPreguntas} onChange={(e) => setCantidadPreguntas(e.target.value)} required />

        <label htmlFor="cantidadAlumno">Cantidad de preguntas para el alumno:</label>
        <input type="number" id="cantidadAlumno" value={cantidadAlumno} onChange={(e) => setCantidadAlumno(e.target.value)} required />

        <label htmlFor="tiempoLimite">Tiempo límite (en minutos):</label>
        <input type="number" id="tiempoLimite" value={tiempoLimite} onChange={(e) => setTiempoLimite(e.target.value)} required />

        <label>
          <input type="checkbox" checked={programado} onChange={(e) => setProgramado(e.target.checked)} />
          Programado
        </label>

        {programado && (
          <>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required />

            <label htmlFor="hora">Hora:</label>
            <input type="time" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} required />
          </>
        )}

        <button type="submit" className='button'>Crear Examen</button>
      </form>
    </div>
  );
};