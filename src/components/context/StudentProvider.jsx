// src/context/ProfessorProvider.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');

  const clearStudentName = () => {
    setStudentName('');
  };

  return (
    <StudentContext.Provider value={{ studentName, setStudentName, 
        studentId, setStudentId, clearStudentName }}>
      {children}
    </StudentContext.Provider>
  );
};