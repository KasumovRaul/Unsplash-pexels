import React, { createContext, useState, useEffect } from 'react';
import { fetchImages } from '../../UnsplashService';
import { fetchVideos } from '../pexelsService/PexelsService';

const PhotoContext = createContext();

export const PhotoProvider = ({children}) =>{
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [mediaType, setMediaType] = useState("photo");
    const [videos, setVideos] = useState([]);

    // useEffect(()=>{
    //   const loadImages = async () =>{
    //     setLoading(true);
    //     const data = await fetchImages(searchTerm, page);
    //      setImages(data);
    //      setLoading(false);
    //   }
    //   loadImages();
    // },[searchTerm, page]);

    useEffect(()=>{
      const loadMedia = async () =>{
        setLoading(true);
        if(mediaType === "photo"){
          const fetchedImages = await fetchImages(searchTerm, page);
           setImages(fetchedImages);
           setVideos([]); //clear video
        }else if (mediaType === "video"){
          const fetchedVideos = await fetchVideos(searchTerm, page);
          setVideos(fetchedVideos);
          setImages([]); //clear photo
        }
        setLoading(false);
      }
      loadMedia();
    }, [searchTerm, page, mediaType]);

    return (
        <PhotoContext.Provider
         value={{
          images,
          setSearchTerm,
          setPage, 
          page, 
          loading,
          videos,
          mediaType,
          setMediaType
          }}>
            {children}
        </PhotoContext.Provider>
    )
}

export default PhotoContext; 