import React from 'react';

// Style
import './App.css';

// React Router
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import ButtonMode from './components/ButtonMode/ButtonMode';

// Pages
import Home from './pages/Home/Home';

// Context
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ButtonMode/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </DarkModeProvider> 
  );
}

export default App;