import React from 'react'

import './GalleryScroll.css'; 

// Context
import { useMode } from '../../context/DarkModeContext';

const GalleryScroll = () => {

  // Utilização do context para alternar o style
  const { mode } = useMode();

  return (

    <div className={mode ? 'galleryScroll' : 'galleryScroll galleryScroll-dark'}>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/3.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/2.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/5.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/7.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/6.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/4.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
        <div className='item-scroll'>
            <img 
                src='/images/1.jpg' 
                alt='img' 
                className={mode ? 'img-scroll' : 'img-scroll img-scroll-dark'}
            />
        </div>
    </div>
  )
}

export default GalleryScroll