import React, { useState, useContext } from 'react'

//React Router
import { useLocation} from 'react-router-dom';

import './LikeHeart.css'; 

import { UnsplashContext } from '../../context/UnsplashContext';

const LikeHeart = ({ imageId }) => {

    const location = useLocation();

    // Utilização do contexto
    const { fetchImagesByIds } = useContext(UnsplashContext);
    

    const [isChecked, setIsChecked] = useState(() => {
        const recImgs = JSON.parse(localStorage.getItem('ImgsFavs')) || [];
        return recImgs.includes(imageId);  // Se o imageId estiver no array, o checkbox estará marcado
    });

    // Função para manipular os dados no localStorage
    const manipulateStorage = (imageId) => {
        const recImgs = JSON.parse(localStorage.getItem('ImgsFavs'));
        if(recImgs.includes(imageId)){
            // Se o ID estiver incluso, ele remove.
            const updatedImgs = recImgs.filter(img => img !== imageId);
            // Armazena o novo array no localStorage
            localStorage.setItem('ImgsFavs', JSON.stringify(updatedImgs));
             // Desmarca o checkbox
            setIsChecked(false);
            if(location.pathname === '/favorites'){
                //atualiza as imagens quando o click for removido na pagina favorites
                const recImgs = JSON.parse(localStorage.getItem('ImgsFavs'));
                fetchImagesByIds(recImgs);
                localStorage.setItem('ImgsFavs', JSON.stringify(recImgs));
            } 
        }
        else {
            //  Se não estiver em imgsFavs, adiciona imageId
            const updatedImgs = [...recImgs, imageId];
            // Armazena o novo array no localStorage
            localStorage.setItem('ImgsFavs', JSON.stringify(updatedImgs));
            // Marca o checkbox
            setIsChecked(true); 
        }
    }

  return (
    <div className="heart-container" title="Like">
        <input type="checkbox" className="checkbox" id="Give-It-An-Id" checked={isChecked} onChange={() => manipulateStorage(imageId)}/>
        <div className="svg-container">
            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
            </svg>
            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
            </svg>
            <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
            </svg>
        </div>
    </div>
);

}

export default LikeHeart