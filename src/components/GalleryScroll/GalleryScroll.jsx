import React, { useContext } from 'react'

import './GalleryScroll.css'; 

// Components
import Loading from '../Loading/Loading';

// Context
import { useMode } from '../../context/DarkModeContext';
import { UnsplashContext } from '../../context/UnsplashContext';

const GalleryScroll = () => {

  // Utilização do context para alternar o style
  const { mode } = useMode();

  const { images, loading, error } = useContext(UnsplashContext);

  return (
    <>
      {loading ? (<Loading/>) : (
        <div className={mode ? 'galleryScroll' : 'galleryScroll galleryScroll-dark'}>
          {images.map((image) => (
            <div key={image.id} className="item-scroll">
              <img 
                src={image.urls.small} 
                alt={image.alt_description}
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
              />
            </div>
          ))}
        </div>
      )}
    </>
  
  )
}

export default GalleryScroll