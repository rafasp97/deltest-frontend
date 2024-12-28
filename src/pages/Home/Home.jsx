import React from 'react';
import './Home.css'; 

// Components
import Logo from '../../components/Logo/Logo';

// Context
import { useMode } from '../../context/DarkModeContext';

const Home = () => {

  const { mode } = useMode();

  return (
    <div className={mode ? 'homePage' : 'homePage homePage-dark'}>
      <div className={mode ? 'container' : ' container container-dark'}>
            <Logo/>
            <button className={mode ? '' : 'button-dark'}>Start Now!</button>
      </div>
    </div>
  )
}

export default Home