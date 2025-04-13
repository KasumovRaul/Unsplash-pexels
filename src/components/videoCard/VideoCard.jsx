import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './VideoCard.css'

const VideoCard = ({ video }) => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (window.innerWidth > 768) {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            videoRef.current?.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const handleClick = () => {
        navigate(`/video/${video.id}`);
    };

    useEffect(() => {
        // Scroll ile görünürlük kontrolü sadece mobilde aktif
        if (window.innerWidth <= 768) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play();
                        setIsPlaying(true);
                    } else {
                        videoRef.current?.pause();
                        setIsPlaying(false);
                    }
                },
                {
                    threshold: 0.6
                }
            );

            if (videoRef.current) {
                observer.observe(videoRef.current);
            }

            return () => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            };
        }
    }, []);

    const videoFile = video?.video_files?.[0];

    return (
        <div
            className='video-wrapper'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {videoFile ? (
                <video
                    ref={videoRef}
                    src={videoFile.link}
                    muted
                    loop
                    playsInline
                    preload='metadata'
                    poster={video.image}
                    className='video'
                />
            ) : (
                <p>Not forget Video</p>
            )}
        </div>
    );
};

export default VideoCard;
