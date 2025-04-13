import React, { useContext, useEffect, useRef } from "react";
import PhotoContext from "../photoContext/PhotoContext";
import "./HomePage.css";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FcDownload } from "react-icons/fc";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import VideoCard from "../videoCard/VideoCard";


const HomePage = () => {
  const { images, setSearchTerm, setPage, page, loading, mediaType, videos } = useContext(PhotoContext);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  const handlePhotoClick = (id) => {
    navigate(`/image/${id}`);
  };

  const handleVideoClick = (id) =>{
    navigate(`/video/${id}`)
  }

  return (
    <div>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <div className="photoCard-container" ref={scrollRef}>
        <div className="photoCard-tile">
          {/* Fotoğraflar */}
          <div className="photoCard-image-section">
            {mediaType === "photo" &&
              images.map((img) => (
                <div key={img.id} className="photoCard-wrapper">
                  <img
                    src={img.urls.small}
                    alt={img.alt_description || "photo"}
                    onClick={() => handlePhotoClick(img.id)}
                  />
                  <div className="photoCard-info top-left">
                    <span className="photographer-name">
                      <MdOutlineAddAPhoto /> {img.user.name}
                    </span>
                  </div>
                  <div className="photoCard-download bottom-left">
                    <span className="download-icon">
                      <FcDownload />
                    </span>
                  </div>
                </div>
              ))}
          </div>
          {mediaType === "video" && (
  <div className="videoCard-container">
    {videos.map((video) => (
      <VideoCard key={video.id} video={video} />
    ))}
  </div>
)}
        </div>

        <div className="pagination-section">
          <button
            className="pagination-after"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            style={{
              opacity: page === 1 ? 0.5 : 1,
              cursor: page === 1 ? "not-allowed" : "pointer",
            }}
          >
            <MdFirstPage />
          </button>
          <span className="pagination-count">{page}</span>
          <button className="pagination-before" onClick={() => setPage((prev) => prev + 1)}>
            <MdLastPage />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
