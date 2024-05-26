import React from 'react';

const Ingreso = () => {
  return (
    <div style={{
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h2>Ingresa tu ID para continuar</h2>
      <input type="text" placeholder="ID" style={{
        width: '250px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px'
      }} />
      <button style={{
        backgroundColor: '#28a745',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>INGRESAR</button>
    </div>
  );
};

export default Ingreso;
