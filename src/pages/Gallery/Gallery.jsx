import React from 'react'

import './Gallery.css'; 

// Context
import { useMode } from '../../context/DarkModeContext';

// Components
import GalleryScroll from '../../components/GalleryScroll/GalleryScroll';


const Gallery = () => {

  // Utilização do context para alternar o style
  const { mode } = useMode();

  return (
    <div className={mode ? 'galleryPage' : 'galleryPage galleryPage-dark'}>
        <div className={mode ? 'galleryContainer' : ' galleryContainer galleryContainer-dark'}>
            <h1>ImageGallery</h1>
            <div className="search-favorites">
              <div className={mode ? 'search-container' : 'search-container search-container-dark'}>
                <input type="text" id="search" placeholder="Search for photos and illustrations..." />
                <button className={mode ? 'button-search' : 'button-search button-dark'}>
                  <img src={mode ? '/images/search-1.png' : '/images/search-2.png' } className='icon-search'/>
                </button>
              </div>
              <button className={mode ? 'button-fav' : 'button-fav button-fav-dark'}>
                  Favorites
                </button>
            </div>
            <GalleryScroll/>
        </div>
    </div>
  )
}

export default Gallery