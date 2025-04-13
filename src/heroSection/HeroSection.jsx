import React from "react";
import "./HeroSection.css";
import InputWrapper from "../components/inputWrapper/InputWrapper";
import bgImage from "../assets/photo-of-large-deep-green-plant-leaves.jpg"; // kendi yoluna göre düzenle

const HeroSection = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h2 className="hero-title">Free stock photos and royalty-free images</h2>
          <p className="hero-subtitle">
            Download stunning photos for websites and commercial use
          </p>
          <InputWrapper />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
