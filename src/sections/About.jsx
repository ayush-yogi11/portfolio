import React, { useState, useEffect } from 'react';
import './About.css';
import profile from '../assets/profile.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'fade-in' : ''}`}>
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm a passionate Computer Science student from Nepal, specializing in 
              Artificial Intelligence. With 6 months of professional internship experience 
              and 15+ completed projects, I thrive on turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            <p className="about-description">
              My journey in technology started with curiosity about how things work, 
              which evolved into a passion for creating digital experiences that make 
              a difference. I'm constantly learning and exploring new technologies to 
              stay at the forefront of web development and AI innovation.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          <div className={`about-image ${isVisible ? 'fade-in' : ''}`}>
            <div className="about-image fade-in">
 <img src={profile} alt="Profile" className="profile-photo" />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
