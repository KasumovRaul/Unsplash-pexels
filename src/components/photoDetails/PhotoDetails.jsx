import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PhotoContext from '../photoContext/PhotoContext';
import './PhotoDetails.css'
import RelatedPhoto from '../relatedPhoto/RelatedPhoto';
import axios from 'axios';

const PhotoDetails = () => {
    const {id} = useParams();
    const {images} = useContext(PhotoContext);
    const [photo, setPhoto] = useState(null);
   

    useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"});
      
        const fetchPhotoById = async () =>{
            try {
            const res = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=qHQ_ppDsb6GiqOMrPudSp63ghS6Yr4kUXAL12Q6DQp4`);
                setPhoto(res.data);

            } catch (error) {
                console.error(error);             
            }
        };
         fetchPhotoById();
    }, [id]);

  return (
    <>
    <div className="photo-detail">
        <div className="photo-detail-content">
         {
            !photo ?  (
            <div className="spinner-overlay">
                <div className="spinner"></div>
             </div>
               ) : (
            <div className="photo-detail-info">
                  <div className="photo-detail-info-left">
                <div className="photo-detail-img">
                    <img src={photo.urls.small}  alt={photo.alt_description}  />
                </div>
                </div>
                 <div className="photo-detail-info-right">
                <div className="photo-detail-title">
                 <h3 className='photo-detail-name'>{photo.user.name}</h3>
                <p>{photo.alt_description || "No description available"}</p>
                </div>
                  <div className="photo-details-gutter">
                     <div className="photo-details-size">
                        <div className="photo-details-size-head">
                            <h3>Photo Size</h3>
                        </div>
                         <div className="photo-details-high">
                            <input type="checkbox" name="checkbox" id="" />
                             <label htmlFor="">High resolution</label>
                         </div>
                         <div className="photo-details-low">
                            <input type="checkbox" name="checkbox" id="" />
                             <label htmlFor="">Low resolution</label>
                         </div>
                     </div>
                     <div className="photo-details-download">
                        <button><a href={photo.links.download} target="_blank" rel="noopener noreferrer"> Download free photo</a>
                       </button>
                     </div>
                  </div>
                </div>
                </div>     
                  ) 
               }
        </div>
    </div>
    {photo && <RelatedPhoto query={photo.alt_description || 'nature'}/>}

    </>
  )
}

export default PhotoDetails