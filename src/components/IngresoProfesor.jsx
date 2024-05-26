import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IngresoProfesor = () => {
  const [id, setId] = useState('');
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar modal
  const [userType, setUserType] = useState(null); // Estado para guardar el tipo de usuario

  const handleInputChange = (event) => {
    setId(event.target.value);
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
        setUserData({
          id: data.usuariosIdUsuario,
          nombre: data.nombre,
          apellido: data.apellido,
        });
        setUserType(data.usuarios.idTipoUsuario.id);

        if (data.usuarios.idTipoUsuario.id === 2) {
          setShowModal(true);
          console.log(data.usuarios.idTipoUsuario)
        }
      } else {
        setShowModal(true); // Mostrar modal si no se encuentra el usuario
      }
    } catch (error) {
      setShowModal(true); // Mostrar modal si no se encuentra el usuario
      console.error('Error:', error);
    }
  };

  return (
    <div style={{
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h2>Ingresa tu ID para continuar</h2>
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

      {userData ? (
        <Link
          to={`/home_profesor/${userData.id}`} // Concatena el ID del usuario en la URL
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          INGRESAR
        </Link>
      ) : (
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          INGRESAR
        </button>
      )}
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
