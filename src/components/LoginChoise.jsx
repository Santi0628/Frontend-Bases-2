import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const LoginChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0f7e9; /* Light greenish background */
  border-radius: 10px;
  padding: 40px; /* Aumentado para más espacio */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 80vh; /* Ajuste de la altura mínima */
`;

const Header = styled.div`
  background-color: #4d7a52; /* Darker green for the header */
  color: white;
  padding: 20px 40px; /* Aumentado para más espacio */
  border-radius: 5px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.5em; /* Tamaño de fuente más grande */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  background-color: #5ca36a; /* Soft green for the title */
  color: white;
  padding: 20px 40px; /* Aumentado para más espacio */
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 1.8em; /* Tamaño de fuente más grande */
`;

const Buttons = styled.div`
  display: flex;
  gap: 40px; /* Aumentado para más espacio */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(Link)`
  padding: 20px 40px; /* Aumentado para más espacio */
  border: none;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
  font-size: 1.5em; /* Tamaño de fuente más grande */

  &.profesor {
    background-color: #66c285; /* Green for the professor button */
  }

  &.estudiante {
    background-color: #85d19d; /* Lighter green for the student button */
  }

  &.profesor:hover {
    background-color: #218838; /* Darker green on hover for professor button */
  }

  &.estudiante:hover {
    background-color: #218838; /* Darker green on hover for student button */
  }
`;

const Image = styled.img`
  width: 150px; /* Tamaño más grande */
  height: 150px; /* Tamaño más grande */
  margin-top: 20px; /* Espacio adicional */
`;

const LoginChoice = () => {
  return (
    <LoginChoiceContainer>
      <Content>
        <Title>Ingresar como</Title>
        <Buttons>
          <ButtonContainer>
            <Button to="/profesor" className="profesor">Profesor</Button>
            <Image src="profesorImage.png" alt="Profesor" />
          </ButtonContainer>
          <ButtonContainer>
            <Button to="/estudiante" className="estudiante">Estudiante</Button>
            <Image src="estudianteImage.png" alt="Estudiante" />
          </ButtonContainer>
        </Buttons>
      </Content>
    </LoginChoiceContainer>
  );
};

export default LoginChoice;
