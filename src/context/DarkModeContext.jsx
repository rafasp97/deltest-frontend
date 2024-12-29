// contexts/ModeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Criando o contexto
const DarkModeContext = createContext();

// Criando o provedor de contexto
export const DarkModeProvider = ({ children }) => {
  // Recupera o valor do dark mode do localStorage, ou assume true como padrão
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; // Default to true (dark mode) if not found
  });

  // Função para alternar o modo
  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = !prevMode;
      // Salva no localStorage o estado do dark mode
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    // Restaura o estado ao recarregar a página
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setMode(JSON.parse(savedMode));
    }
  }, []);

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
