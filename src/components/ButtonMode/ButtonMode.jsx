import React from 'react'

import './ButtonMode.css';


// Use Context
import { useMode } from '../../context/DarkModeContext';

const ButtonMode = () => {

  const { mode, toggleMode } = useMode();

  return (
    <>
      <input type="checkbox" className="theme-checkbox" onClick={toggleMode} checked={!mode}/>
    </>
  )
}

export default ButtonMode