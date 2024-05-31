import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { ProfessorContext } from './context/ProfessorProvider';

const IngresoProfesor = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar modal
  const [userType, setUserType] = useState(null); // Estado para guardar el tipo de usuario
  const { setProfessorName, setProfessorId } = useContext(ProfessorContext);
  const navigate = useNavigate(); // Utiliza useNavigate para la redirección

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:9009/usuarios/buscarProfesorPorId?id_profesor=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserType(data.usuarios.idTipoUsuario.id);

        if (data.usuarios.idTipoUsuario.id === 2) {
          setProfessorName(data.nombre); // Setea el nombre del profesor en el contexto
          setProfessorId(data.usuariosIdUsuario); // Setea el ID del profesor en el contexto
          navigate(`/home_profesor/${data.usuariosIdUsuario}`); // Redirige al usuario
        } else {
          setShowModal(true); // Mostrar modal si el usuario no es un profesor
        }
      } else {
        setShowModal(true); // Mostrar modal si no se encuentra el usuario
      }
    } catch (error) {
      setShowModal(true); // Mostrar modal si hay un error en la solicitud
      console.error('Error:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Ocupa toda la altura de la pantalla
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      marginTop: '20px'
    }}>
      <img
        src="identifiquese.png" // Reemplaza esto con la ruta correcta de tu imagen
        alt="Imagen de fondo"
        style={{
          width: '150px', // Ajusta el tamaño según tus necesidades
          height: 'auto',
          marginBottom: '20px' // Espacio entre la imagen y el texto
        }}
      />
      <h2>Ingresa tu ID y contraseña para continuar</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={handleInputChange}
        style={{
          width: '250px',
          padding: '10px',
          marginRight: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '10px'
        }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
        style={{
          width: '250px',
          padding: '10px',
          marginRight: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '20px' // Espacio adicional para el botón
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em'
        }}
      >
        INGRESAR
      </button>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            {userType === 2 ? (
              <p>Bienvenido Profesor.</p>
            ) : (
              <p>No se encontró usuario.</p>
            )}
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngresoProfesor;
