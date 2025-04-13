import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RelatedPhoto.css'
import { useNavigate } from 'react-router-dom';

const RelatedPhoto = ({ query }) => {
    const [relatedPhotos, setRelatedPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchRelatedPhotos = async () =>{
            try {
             const res = await axios.get(
                `https://api.unsplash.com/photos/random?query=${query}&count=5&client_id=qHQ_ppDsb6GiqOMrPudSp63ghS6Yr4kUXAL12Q6DQp4`
             );
              setRelatedPhotos(res.data);
              setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchRelatedPhotos();
    }, [query]);

   if(loading) return <p>Loading related photos...</p>;

 
    return(
        <div>
            <div className="related-photos">
                 <div className="related-container">
                    <div className="related-head">
                        <h3>Related Photos</h3>
                    </div>
                      <div className="gallery-grid">
                        {
                            relatedPhotos.map((photo)=>(
                            <div className="photo-item">
                               <div className="photo-img" key={photo.id} onClick={()=> navigate(`/image/${photo.id}`)}>
                                <img src={photo.urls.small} alt={photo.alt_description} />
                                </div>     
                             </div>
                            ))
                        }
                      </div>
                 </div>
               
            </div>

              <section>
                 <div className="subscribe-section">
                    <div className="subscribe-content">
                        <div className="subscribe-heading">
                            <p>Get first access to free photos and other Burst content. Unsubscribe anytime.</p>
                        </div>
                         <div className="subscribe-form">
                            <form >
                                <div className="subscribe-email">
                                    <input type="email" placeholder='Your Email Address'/>
                                </div>
                                <div className="subscribe-btn">
                                    <button>Submit</button>
                                </div>
                            </form>
                         </div>
                    </div>
                 </div>
              </section>
        </div>
    )

}

export default RelatedPhoto;
