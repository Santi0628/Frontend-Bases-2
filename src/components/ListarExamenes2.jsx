import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfessorContext } from './context/ProfessorProvider';
import { Link, useParams } from 'react-router-dom';

const Container = styled.div`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #2a7c34; /* Nuevo tono de verde */
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 16px;
`;

const UserName = styled.span`
  padding-top: 30px;
  font-size: 18px;
`;

const Title = styled.h2`
  margin-top: 50px;
  text-align: center;
  color: #333;
`;

const ExamHistory = styled.div`
  padding: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  background-color: #e0f7fa;
  color: #00796b;
  padding: 8px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const ActionButton = styled.button`
  background-color: #2a7c34; /* Nuevo tono de verde */
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e5a23; /* Nuevo tono de verde oscuro */
  }
`;

const BackButton = styled.button`
  background-color: #004d40; /* Nuevo tono de verde */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 0 auto 16px;

  &:hover {
    background-color: #00332b; /* Nuevo tono de verde oscuro */
  }
`;

const ListarExamenes = () => {
  const { professorId } = useContext(ProfessorContext);
  const [exams, setExams] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9009/examenes/buscarExamenesPorProfesor/${id}`)
      .then(response => response.json())
      .then(data => setExams(data))
      .catch(error => console.error('Error fetching exams:', error));
  }, [professorId]);

  return (
    <Container>
      <Title>Estructura Diurno 01</Title>
      <ExamHistory>
        <h3>Historial De Exámenes</h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>Nombre Examen</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Duración</TableHeader>
              <TableHeader>Estado</TableHeader>
              <TableHeader>Contenido Nombre</TableHeader>
              <TableHeader>Grupo Nombre</TableHeader>
              <TableHeader>Acciones</TableHeader>
            </tr>
          </thead>
          <tbody>
            {exams.map(exam => (
              <TableRow key={exam.id}>
                <TableCell>{exam.nombre}</TableCell>
                <TableCell>{exam.tipoExamen}</TableCell>
                <TableCell>{exam.duracion}</TableCell>
                <TableCell>{exam.estadoPublicacion}</TableCell>
                <TableCell>{exam.idContenido.nombre}</TableCell>
                <TableCell>{exam.gruposIdGrupo.nombreGrupo}</TableCell>
                <TableCell>
                  <ActionButton>Ver</ActionButton>
                  <ActionButton>Eliminar</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <Link to={`/home_profesor/${id}`} style={{
          color: "white",
          textAlign: "center",
          textDecoration: "none",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          display: "block",
          margin: "0 auto 16px",
          background: "#004d40", /* Nuevo tono de verde */
          borderRadius: "4px"
        }}>
          Regresar
        </Link>
      </ExamHistory>
    </Container>
  );
};

export default ListarExamenes;
