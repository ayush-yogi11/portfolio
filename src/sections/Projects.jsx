import React from 'react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-photo" />
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    🌐 Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
