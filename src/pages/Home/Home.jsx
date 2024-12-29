import React, { useContext } from 'react';
import './Home.css'; 

// React Router
import { useNavigate } from 'react-router-dom';

// Components
import Logo from '../../components/Logo/Logo';

// Context
import { useMode } from '../../context/DarkModeContext';
import { UnsplashContext } from '../../context/UnsplashContext';

const Home = () => {


  // Para navegação entre páginas acionada em button
  const navigate = useNavigate();

  // Utilização do context para alternar o style
  const { mode } = useMode();

  // Utilização do contexto para acionar uma requisição na API
  const { fetchImages, loading } = useContext(UnsplashContext);

  const changePage = () => {
    fetchImages();
    navigate('/gallery');
  }

  return (
    <div className={mode ? 'homePage' : 'homePage homePage-dark'}>
      <div className={mode ? 'container' : ' container container-dark'}>
            <Logo/>
            <button 
            className={mode ? '' : 'button-dark'}
            onClick={changePage}
            >
              Start Now!
            </button>
      </div>
    </div>
  )
}

export default Home