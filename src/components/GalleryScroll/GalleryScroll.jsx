import React, { useContext, useEffect } from 'react'

import './GalleryScroll.css'; 

// React Router
import { useLocation } from 'react-router-dom';


// Context
import { useMode } from '../../context/DarkModeContext';
import { UnsplashContext } from '../../context/UnsplashContext';

const GalleryScroll = () => {

  const location = useLocation();
  const isFavoritePage = location.pathname === '/favorites' // retorna true ou false

  // Utilização do context para alternar o style
  const { mode } = useMode();

  // Utilização do contexto para recebimento das imagens e estado de carregamento
  const { images, loading } = useContext(UnsplashContext);


/* 
  Lógica BackEnd para favoritar imagens - LocalStorage
  JSON.parse é o méotodo que transforma o elemento formato utilizado para enviar ao storage
  JSON.stringify é o método que transforma o elemento do storage para ser usado no código.
*/

  // Verificando a existência do array ImgsFavs no storage toda vez que a página é carregada.
  useEffect(() => {
    // Verifica se 'ImgsFavs' já existe no localStorage
    const imgsFavs = localStorage.getItem('ImgsFavs');
    if (imgsFavs === null) {
      // Se não existe, cria um array vazio e armazena no localStorage
      localStorage.setItem('ImgsFavs', JSON.stringify([]));
    }
  }, []);


  // Função para manipular os dados no localStorage
  const manipulateStorage = (imageId) => {
    const recImgs = JSON.parse(localStorage.getItem('ImgsFavs'));
    if(recImgs.includes(imageId)){
      // Se o ID estiver incluso, ele remove.
      const updatedImgs = recImgs.filter(img => img !== imageId);
      // Armazena o novo array no localStorage
      localStorage.setItem('ImgsFavs', JSON.stringify(updatedImgs));

    }
    else {
      //  Se não estiver em imgsFavs, adiciona imageId
      const updatedImgs = [...recImgs, imageId];
      // Armazena o novo array no localStorage
      localStorage.setItem('ImgsFavs', JSON.stringify(updatedImgs));
    }
  }


  return (
    <>
      {isFavoritePage && <h1 className='galleryScroll-h1'>Your favorites photos</h1>}
      {loading ? (<h1 className='galleryScroll-h1'>Loading...</h1>) : (
          <div className={mode ? 'galleryScroll' : 'galleryScroll galleryScroll-dark'}>
            {images.map((image) => (
              <div key={image.id} className="item-scroll" onClick={() => manipulateStorage(image.id)}>
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