import React from 'react'

export const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(90deg, #248f03 10%, #0ee443 100%)',
            color: 'white',
            padding: '20px 0'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    paddingRight: '55px',
                    borderRadius: '50%',
                    marginRight: '10px'
                }}>
                    <img src='uq2.jpg' alt="Imagen de login" width={100} height={50}/>
                </div>
                <h2 style={{margin: '0 10px'}}>UQ Examenes</h2>
                <p style={{margin: '0', fontSize: '14px'}}>© 2024 UQ Examenes. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}