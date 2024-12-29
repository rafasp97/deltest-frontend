import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Chave de acesso para o perfil na API Unsplash
const key = '034-qhq7NjBWQhXUBGnNX_ACwdrqsG5RwQwynSVTZ08';
const url = 'https://api.unsplash.com/photos'

// Criação do contexto
export const UnsplashContext = createContext();

// Função para fornecer as imagens e informações sobre o estado de carregamento e erro
export const UnsplashProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar as imagens
  const fetchImages = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          client_id: key,
          per_page: 21,
          page: Math.floor(Math.random() * 100) + 1,
        },
      });
      setImages(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Erro ao buscar imagens: ', err);
      setError('Ocorreu um erro ao carregar as imagens. Tente novamente mais tarde.');
      setLoading(false);
    }
  };

  // Carregar as imagens quando o componente for montado
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <UnsplashContext.Provider value={{ images, loading, error, fetchImages}}>
      {children}
    </UnsplashContext.Provider>
  );
};
