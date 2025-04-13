import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './SearchResult.css'

const SearchResult = () => {
    const {query} = useParams();
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchResults = async () =>{
            try {
             const response = await axios.get(`https://api.unsplash.com/search/photos`,{
                params:{
                    query:query,
                    per_page: 30,
                },
                headers:{
                    Authorization: 'Client-ID qHQ_ppDsb6GiqOMrPudSp63ghS6Yr4kUXAL12Q6DQp4',
                }
             });
             setResults(response.data.results);
            } catch (error) {
                console.error('Error fetching :', error);

            }
        };
        fetchResults();
    }, [query]);

 

  return (
    <div> 
    <div className='result-container' >
    <h2 className='result-head' ><span>Search Results for:</span> <strong>{query}</strong></h2>
    <div className='result-grid'>
      {results.map((photo) => (
        <div key={photo.id} className='result-img' onClick={()=> navigate(`/image/${photo.id}`)}>
          <img src={photo.urls.small} alt={photo.alt_description} style={{ width: "100%", borderRadius: "8px" }} />
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default SearchResult