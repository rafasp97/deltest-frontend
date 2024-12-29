import React from 'react';

// Style
import './App.css';

// React Router
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

// Components
import ButtonMode from './components/ButtonMode/ButtonMode';

// Pages
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';

// Context
import { DarkModeProvider } from './context/DarkModeContext';
import { UnsplashProvider } from './context/UnsplashContext';

function App() {
  return (
    <UnsplashProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <ButtonMode/>
            <AnimatePresence mode="wait">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <motion.div 
                    key="home"
                    initial={{ opacity: 1, scale: 1}}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6,  ease: "easeInOut"}}
                    >
                      <Home />
                    </motion.div>
                  }
                />
              <Route 
              path="/gallery"
              element={
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02}}
                  transition={{ duration: 0.6, ease: "easeInOut"}}
                >
                  <Gallery />
                </motion.div>
              }
              />
              <Route 
              path="/favorites"
              element={
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02}}
                  transition={{ duration: 0.6, ease: "easeInOut"}}
                >
                  <Gallery />
                </motion.div>
              }
              />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </DarkModeProvider> 
    </UnsplashProvider>
  );
}

export default App;