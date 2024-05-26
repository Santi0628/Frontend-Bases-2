import React from 'react'
export const Header = () => {
    return (
        <div style={{
            background: '#ffffff',
            fontFamily: 'sans-serif, Arial, Helvetica',
            textAlign: 'center',
            padding: '0px',
            margin: '0px',
            width: '100%',
            height: '150px',
            display: 'grid',
            gridTemplateAreas: '"header header header header" "nav nav nav nav" "content content content lateral" "footer footer footer footer"',
            gridTemplateRows: '100px 70px auto 70px'
        }}>
            <header style={{
                gridArea: 'header',
                background: '#f0f0f0',
                textAlign: 'left',
                fontStyle: 'italic',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '0',
                    height: '0',
                    marginTop: '15px',
                    marginLeft: '16px',
                    borderLeft: '12px solid #f0f0f0',
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent'
                }}></div>
                <h1 style={{marginLeft: '15px', marginTop: '30px'}}>UQ Examenes</h1>
            </header>
            <nav style={{
                gridArea: 'nav',
                background: 'linear-gradient(90deg, #248f03 10%, #0ee443 100%)'
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    listStyle: 'none'
                }}>
                    <li style={{padding: '10px'}}><a href="#" style={{
                        display: 'block',
                        marginLeft: '30px',
                        marginRight: '30px',
                        fontSize: '18px',
                        fontWeight: 'lighter',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 300ms'
                    }}>Nombre profesor</a></li>
                    <li style={{padding: '10px'}}><a href="#" style={{
                        display: 'block',
                        marginLeft: '30px',
                        marginRight: '30px',
                        fontSize: '18px',
                        fontWeight: 'lighter',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 300ms'
                    }}>Examenes</a></li>
                    <li style={{padding: '10px'}}><a href="#" style={{
                        display: 'block',
                        marginLeft: '30px',
                        marginRight: '30px',
                        fontSize: '18px',
                        fontWeight: 'lighter',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 300ms'
                    }}>Ingresar</a></li>
                    <li style={{padding: '10px'}}><a href="#" style={{
                        display: 'block',
                        marginLeft: '30px',
                        marginRight: '30px',
                        fontSize: '18px',
                        fontWeight: 'lighter',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 300ms'
                    }}>Salir</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
