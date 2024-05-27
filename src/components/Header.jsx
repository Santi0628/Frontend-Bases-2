import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfessorContext } from './context/ProfessorProvider';
import { StudentContext } from './context/StudentProvider';

export const Header = () => {
    const { professorName, professorId, clearProfessorName } = useContext(ProfessorContext);
    const { studentName, studentId } = useContext(StudentContext);
    let nombre = '';
    if (studentName !== undefined) {
        nombre =studentName
    }else{
        nombre = professorName;
    }

    const handleLogout = () => {
        clearProfessorName();
    };

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
                <h1 style={{ marginLeft: '15px', marginTop: '30px' }}>UQ Examenes</h1>
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
                    <li style={{ padding: '10px' }}>
                        <Link to={professorId ? `/home_profesor/${professorId}` : `/home_estudiante/${studentId}`} style={{
                            display: 'block',
                            marginLeft: '30px',
                            marginRight: '30px',
                            fontSize: '18px',
                            fontWeight: 'lighter',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 300ms'
                        }}>
                            Hola <b>{nombre ? nombre : 'identifiquese '}</b>
                        </Link>
                    </li>
                    <li style={{ padding: '10px' }}>
                    <Link to={`/listarExamenes/`} style={{
                            display: 'block',
                            marginLeft: '30px',
                            marginRight: '30px',
                            fontSize: '18px',
                            fontWeight: 'lighter',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 300ms'
                        }}>
                            Examenes
                        </Link>
                    </li>
                    <li style={{ padding: '10px' }}>
                        <Link to="/" onClick={handleLogout} style={{
                            display: 'block',
                            marginLeft: '30px',
                            marginRight: '30px',
                            fontSize: '18px',
                            fontWeight: 'lighter',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 300ms'
                        }}>
                            Salir
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
