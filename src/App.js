import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Seus componentes de página
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;