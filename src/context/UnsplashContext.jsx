import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// Chave de acesso para o perfil na API Unsplash
const key = '034-qhq7NjBWQhXUBGnNX_ACwdrqsG5RwQwynSVTZ08';
const url = 'https://api.unsplash.com/photos';
const searchUrl = 'https://api.unsplash.com/search/photos';


// Criação do contexto
export const UnsplashContext = createContext();

// Função para fornecer as imagens e informações sobre o estado de carregamento e erro
export const UnsplashProvider = ({ children }) => {
    const location = useLocation();
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');  // filtro de pesquisa


    // Função para buscar as imagens
    const fetchImages = async (searchQuery = '') => {
        setLoading(true);
        setError(null);
        const requestUrl = searchQuery ? searchUrl : url;
        const params = {
            client_id: key,
            per_page: 20,
            page: Math.floor(Math.random() * 100) + 1,
        };

        if (searchQuery) {
            params.query = searchQuery;  // Se houver um filtro, adicionar o parâmetro de busca
        }

        try {
            const response = await axios.get( requestUrl,{params});
            if (searchQuery) {
                setImages(response.data.results);  // Para a busca, armazenar os resultados
            } else {
                setImages(response.data);  // Para a busca sem filtro, armazenar as imagens
            }
            setLoading(false);
            } 
        catch (err) {
            console.error('Erro ao buscar imagens: ', err);
            setError('Error: Unable to connect to server. Please try later!');
            setLoading(false);
        }
    };

    // Função para buscar imagens a partir de um array de IDs
    const fetchImagesByIds = async (ids) => {
        setLoading(true);
        setError(null);

        try {
            // Cria uma lista para buscar pelo parâmetro ids = ImgsFavs
            const requests = ids.map(id => 
                axios.get(`${url}/${id}`, {
                    params: { client_id: key },
                })
            );
            
            // Aguardar o retorno da API
            const responses = await Promise.all(requests);

            // Seleciona os dados retornados em uma variável
            const imagesData = responses.map(response => response.data);
            
            setImages(imagesData);  // Atualiza o estado com as imagens
            setLoading(false);
        } 
        catch (err) {
            console.error('Erro ao buscar imagens por IDs: ', err);
            setError('Error: Unable to connect to server. Please try later!');
            setLoading(false);
        }
    };

    // Carregar as imagens quando o componente for montado ou quando o pathname mudar
    useEffect(() => {
        if (location.pathname === '/gallery') {
            fetchImages();  // Chama a função fetchImages se estiver na página /gallery
        } 
        else if (location.pathname === '/favorites') {
            // Verifica se existem IDs no localStorage e chama fetchImagesByIds
            const storedIds = localStorage.getItem('ImgsFavs');
            if (storedIds) {
                const imgFavs = JSON.parse(storedIds);
                if (imgFavs && imgFavs.length > 0) {
                    fetchImagesByIds(imgFavs);  // Chama a função fetchImagesByIds se houver IDs no localStorage
                }
            }
        }
    }, [location.pathname]); // Ação disparada sempre que o endereço (location) mudar 

 // Função para atualizar o estado da pesquisa
 const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

// Função para realizar a pesquisa quando o formulário for enviado
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchImages(query); // Inicia a busca com o termo fornecido
  };

  return (
    <UnsplashContext.Provider value={{
    images, 
    loading, 
    error, 
    fetchImages, 
    fetchImagesByIds,
    query, 
    handleSearchChange, 
    handleSearchSubmit }}>
      {children}
    </UnsplashContext.Provider>
  );
};
