import React from 'react'

import './ButtonMode.css';


// Use Context
import { useMode } from '../../context/DarkModeContext';

const ButtonMode = () => {

  const { toggleMode } = useMode();

  return (
    <>
      <input type="checkbox" className="theme-checkbox" onClick={toggleMode}/>
    </>
  )
}

export default ButtonMode