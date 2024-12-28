import React from 'react'
import './Logo.css'; 

// Context
import { useMode } from '../../context/DarkModeContext';

// Framer Motion
import { motion, motionValue } from 'framer-motion';

const Logo = () => {


  const { mode } = useMode();


  return (
    <div className='logo'>
        <motion.img 
          src={mode ?  '../../images/logo/7.png' : '../../images/logo/7mode.png' }
          alt='logo-1' 
          className= {mode ? 'icon-cd-5' : 'icon-cd-5 icon-cd-dark'}
          initial={{ opacity: 0, y: -25 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 3.6,}} 
        />
        <motion.img 
          src={mode ?  '../../images/logo/6.png' : '../../images/logo/6mode.png' }
          alt='logo-1' 
          className={mode ? 'icon-cd-4' : 'icon-cd-4 icon-cd-dark'}
          initial={{ opacity: 0, y: -25 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 3.3,}} 
        />
        <motion.img 
          src={mode ?  '../../images/logo/5.png' : '../../images/logo/5mode.png' } 
          alt='logo-1' 
          className={mode ? 'icon-cd-3' : 'icon-cd-3 icon-cd-dark'}
          initial={{ opacity: 0, y: -25 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 3.0,}} 
        />
        <motion.img 
          src={mode ?  '../../images/logo/4.png' : '../../images/logo/4mode.png' }
          alt='logo-1' 
          className={mode ? 'icon-cd-2' : 'icon-cd-2 icon-cd-dark'}
          initial={{ opacity: 0, y: -25 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 2.7,}} 
        />
        <motion.img
          src={mode ?  '../../images/logo/3.png' : '../../images/logo/3mode.png' }
          alt='logo-3' 
          className={mode ? 'icon-cd-1' : 'icon-cd-1 icon-cd-dark'}
          initial={{ opacity: 0, y: -25 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 2.4,}} 
        />
        <motion.img 
          src={mode ?  '../../images/logo/2.png' : '../../images/logo/2mode.png' }
          alt='logo-2' 
          className={mode ? 'icon-2' : 'icon-2 icon-dark'}
          initial={{ opacity: 0, y: -25 }}  
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 2.1,}} 
        />
        <motion.img 
          src={mode ?  '../../images/logo/1.png' : '../../images/logo/1mode.png' }
          alt='logo-1' 
          className={mode ? 'icon-1' : 'icon-1 icon-dark'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
        />
        <motion.h1
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        >
          Image Gallery
        </motion.h1>
    </div>
  )
}

export default Logo