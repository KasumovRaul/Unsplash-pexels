import React, { useState } from 'react'
import axios from 'axios';
import './SearchInput.css';
import UseDebounce from '../../UseDebounce';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedTerm = UseDebounce(searchTerm, 500);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
       const fetchSuggestions = async () =>{
            if(debouncedTerm.trim() === ''){
                setSuggestions([]);
                return;
            }
            try {
              const response = await axios.get(
                `https://api.unsplash.com/search/photos`,
                {
                    params:{
                        query: debouncedTerm,
                        per_page:5,
                    },
                    headers:{
                        Authorization: 'Client-ID qHQ_ppDsb6GiqOMrPudSp63ghS6Yr4kUXAL12Q6DQp4',
                    }
                }
              );

            const results = response.data.results;
             const uniqueSuggestions = [
                ...new Set(results.map((item)=>
                    item.alt_description || item.tags?.[0]?.title || 'UnKnown'
                ))
             ].filter(Boolean);

             setSuggestions(uniqueSuggestions.slice(0,5));

            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        }
         fetchSuggestions();
    },[debouncedTerm]);

    const handleSelectSuggestion = (suggestion) =>{
        setSearchTerm(suggestion); // Writes the suggestion clicked on the input
        setSuggestions([]);  //Hide List
        navigate(`/search/${encodeURIComponent(suggestion)}`)
    }

  return (
    <>
    <div className="search-input-wrapper">
        <input type="text" placeholder='Search free photos'
         value={searchTerm}
         onChange={(e)=> setSearchTerm(e.target.value)}
         autoComplete='off'
        />
        {
            suggestions.length > 0 && (
                <div className="suggestion">
                    <ul className="suggestion-list">
                        {
                            suggestions.map((item, index)=>(
                                <li key={index} onClick={()=> handleSelectSuggestion(item)}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    </div>

    </>
  )
}

export default SearchInput