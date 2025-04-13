import React from 'react'
import "./InputWrapper.css"
import SearchInput from '../searchInput/SearchInput';
import PhotoContext from '../photoContext/PhotoContext';
import { useContext } from 'react';

const InputWrapper = () => {
    const {setMediaType, mediaType} = useContext(PhotoContext)

  return (
    <div>
        <div className="inputWrapper">
            <div className="inputWrapper-container">
                  <div className="inputWrapper-input-content">
                      <SearchInput/>
                </div>
                 <div className="inputWrapper-popular-categories">
                    <div className="popular-categories">
                        <h3> Categories:</h3>
                    </div>
               
                 <ul className="popular-categories-names">
                    <li className={`popular-categories-name ${mediaType === 'photo' ? 'active' : ''}`}
                      onClick={()=> setMediaType("photo")}
                     >
                        <a  href="#">PHOTOS</a>
                    </li>
                    <li className={`popular-categories-name ${mediaType === 'video' ? 'active' : ''}`}
                      onClick={()=> setMediaType("video")}
                    >
                        <a href="#">VIDEO</a>
                    </li>
                    
                 </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InputWrapper