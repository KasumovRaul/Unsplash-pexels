import React, { useEffect, useState } from 'react'
import './VideoDetails.css'
import {  useParams } from 'react-router-dom'
import axios from 'axios';

const VideoDetails = () => {
    const {id} = useParams();
    const [video, setVideos] = useState([]);

    useEffect(()=>{
        const fetchVideoById = async () =>{
            try {
             const response = await axios.get(`https://api.pexels.com/videos/videos/${id}`,{
                headers:{
                    Authorization: 't8XHDLEirXhklpLXOBMcd9pnkZ8Wph3AWtYFTvC7WmnXBKcSKwcuZMX6',
                }
             });
             setVideos(response.data)
             console.log(response.data);
             
            } catch (error) {
                console.error(error);
                
            }
        };
        fetchVideoById();
    },[id])

  return (
    <>
     <div className="video-details">
        <div className="video-details-wrapper">
            {
                !video || !video.video_files || video.video_files.length === 0 ? (
                <div className="spinner-overlay">
                    <div className="spinner"></div>
                  </div>
                ) : (
                <div className="video-details-content">
                    <div className="video-details-left">
                    <div className="video-details-video">
                    <video width="350">
                    <source src={video.video_files[0].link} type="video/mp4" />
                       Your browser does not support the video tag.
                    </video>
                   
                    </div>
                    </div>
                     <div className="video-details-right">
                        <div className="video-details-title">
                            <h3 className="video-details-name">{video.user.name}</h3>
                        </div>
                        <div className="video-details-gutter">
                        <div className="video-details-size">
                        <div className="video-details-size-head">
                            <h3>Video quality</h3>
                        </div>
                        <div className="video-details-grid">
                         <div className="video-details-high">
                            <input type="checkbox" name="checkbox" id="" />
                             <label> 3K</label>
                         </div>
                         <div className="video-details-low">
                            <input type="checkbox" name="checkbox" id="" />
                             <label> 4K</label>
                         </div>
                         </div>
                     </div>
                     <div className="video-details-download">
                        <button><a href={video.video_files[0].link} target="_blank" rel="noopener noreferrer"> Download free photo</a>
                       </button>
                     </div>
                        </div>
                     </div>
                </div>
                ) 
            }
        </div>
     </div>

    </>
  )
}

export default VideoDetails