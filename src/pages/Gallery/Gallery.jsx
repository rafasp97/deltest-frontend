import React from 'react'

import './Gallery.css'; 

// Context
import { useMode } from '../../context/DarkModeContext';


const Gallery = () => {

  // Utilização do context para alternar o style
  const { mode } = useMode();

  return (
    <div className={mode ? 'galleryPage' : 'galleryPage galleryPage-dark'}>
        <div className={mode ? 'galleryContainer' : ' galleryContainer galleryContainer-dark'}>
      </div>
    </div>
  )
}

export default Gallery