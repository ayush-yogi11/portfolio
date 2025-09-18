import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Aayush Nath Yogi</span>
          </h1>
          <h2 className="hero-subtitle">
            Computer Science Student & AI Enthusiast
          </h2>
          <p className="hero-description">
            Passionate about creating innovative solutions with 6 months of internship 
            experience and 15+ projects in web development and artificial intelligence.
          </p>
          <button 
            className="hero-button"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
            <span className="button-arrow">→</span>
          </button>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <h3> 15+ Projects</h3>
              <p>Built with modern technologies</p>
            </div>
          </div>
          <div className="floating-card">
            <div className="card-content">
              <h3> AI & ML</h3>
              <p>Machine Learning enthusiast</p>
            </div>
          </div>
          <div className="floating-card">
            <div className="card-content">
              <h3> 6 Months Experience</h3>
              <p>Professional internship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
