import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfessorContext } from './context/ProfessorProvider';
import { StudentContext } from './context/StudentProvider';

export const Header = () => {
    const { professorName, professorId, clearProfessorData } = useContext(ProfessorContext);
    const { studentName, studentId, clearStudentData } = useContext(StudentContext);
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        if (studentName) {
            setNombre(studentName);
        } else if (professorName) {
            setNombre(professorName);
        }
    }, [studentName, professorName]);

    const handleLogout = () => {
        clearProfessorData();
        clearStudentData();
        setNombre('');
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
                background: '#e8f5e9',
                textAlign: 'left',
                fontStyle: 'italic',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '20px'
            }}>
                <img
                    src="data:image/png;base64,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" // Reemplaza esto con la ruta correcta de tu imagen
                    alt="Logo"
                    style={{ width: '50px', height: '50px', marginRight: '15px' }}
                />
                <h1>UQ Examenes</h1>
            </header>
            <nav style={{
                gridArea: 'nav',
                background: 'linear-gradient(90deg, #2a7c34 10%, #57d690 100%)'
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    listStyle: 'none',
                    padding: '0',
                    margin: '0'
                }}>
                    <li style={{ padding: '10px', paddingTop: '15px' }}>
                        <Link to={professorId ? `/home_profesor/${professorId}` : `/home_estudiante/${studentId}`} style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            margin: '0 10px',
                            border: '1px solid white', // Borde sólido
                            borderRadius: '5px',
                            color: 'white', // Color del texto
                            textDecoration: 'none',
                            fontSize: '18px',
                            transition: 'background-color 0.3s ease',
                        }}>
                            Hola <b>{nombre ? nombre : 'identifíquese'}</b>
                        </Link>
                    </li>
                    <li style={{ padding: '10px', paddingTop: '15px' }}>
                        <Link to={professorId ? `/listarExamenes/${professorId}` : `/listarExamenesEstudiante/${studentId}`} style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            margin: '0 10px',
                            border: '1px solid white', // Borde sólido
                            borderRadius: '5px',
                            color: 'white', // Color del texto
                            textDecoration: 'none',
                            fontSize: '18px',
                            transition: 'background-color 0.3s ease',
                        }}>
                            Exámenes
                        </Link>
                    </li>
                    <li style={{ padding: '10px', paddingTop: '15px' }}>
                        <Link to="/" onClick={handleLogout} style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            margin: '0 10px',
                            border: '1px solid white', // Borde sólido
                            borderRadius: '5px',
                            color: 'white', // Color del texto
                            textDecoration: 'none',
                            fontSize: '18px',
                            transition: 'background-color 0.3s ease',
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
