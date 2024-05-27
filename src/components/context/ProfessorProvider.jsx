// src/context/ProfessorProvider.js
import React, { createContext, useState } from 'react';

export const ProfessorContext = createContext();

export const ProfessorProvider = ({ children }) => {
  const [professorName, setProfessorName] = useState('');
  const [professorId, setProfessorId] = useState('');
  const [professorGrupo, setProfessorGrupo] = useState('');

  const clearProfessorName = () => {
    setProfessorName('');
  };

  return (
    <ProfessorContext.Provider value={{ professorName, setProfessorName, 
    professorId, setProfessorId, professorGrupo, setProfessorGrupo, clearProfessorName }}>
      {children}
    </ProfessorContext.Provider>
  );
};