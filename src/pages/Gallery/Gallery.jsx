import React, {useContext} from 'react'

import './Gallery.css'; 

// React Router
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

// Context
import { useMode } from '../../context/DarkModeContext';
import { UnsplashContext } from '../../context/UnsplashContext'; 

// Components
import GalleryScroll from '../../components/GalleryScroll/GalleryScroll';


const Gallery = () => {

  // Utilização do useNavigate para alternar entre /gallery e /favorites
  const navigate = useNavigate();

  // Utilização do useLocation para condicional de navegação
  const location = useLocation();

  const handleNavigate = () => {
    if (location.pathname === '/gallery'){
      navigate('/favorites');
    }
    else{
      navigate('/gallery');
    }
  };

  // Utilização do context para alternar o style
  const { mode } = useMode();

  // Parametros vindos do context
  const { query, handleSearchChange, handleSearchSubmit } = useContext(UnsplashContext)

  return (
    <div className={mode ? 'galleryPage' : 'galleryPage galleryPage-dark'}>
        <div className={mode ? 'galleryContainer' : ' galleryContainer galleryContainer-dark'}>
            <NavLink to={'/'} className={mode ? 'title' : 'title title-dark'}>
              <h1>Image Gallery</h1>
            </NavLink>
            <div className="search-favorites">
              <form 
                className={mode ? 'search-container' : 'search-container search-container-dark'}
                onSubmit={handleSearchSubmit}
              >
                <input 
                  type="text" 
                  id="search" 
                  placeholder="Search for photos..." 
                  value={query}
                  onChange={handleSearchChange}
                />
                <button type="submit" className={mode ? 'button-search' : 'button-search button-dark'}>
                  <img src={mode ? '/images/search-1.png' : '/images/search-2.png' } className='icon-search' alt='icon'/>
                </button>
              </form>
              <button 
                className={mode ? 'button-fav' : 'button-fav button-fav-dark'}
                onClick={handleNavigate}
              >
                Favorites
              </button>
            </div>
            <GalleryScroll/>
        </div>
    </div>
  )
}

export default Gallery