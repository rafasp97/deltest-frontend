// contexts/ModeContext.js
import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const DarkModeContext = createContext();

// Criando o provedor de contexto
export const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true); // State para alterar o button

  const toggleMode = () => {
    setMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook a ser utilizado nos componentes
export const useMode = () => {
  return useContext(DarkModeContext);
};
