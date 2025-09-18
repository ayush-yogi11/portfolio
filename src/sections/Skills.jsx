import React from 'react';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Here are some of the technologies I work with to bring ideas to life
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-legend">
          <div className="legend-item">
            <div className="legend-color beginner"></div>
            <span>Beginner (0-60%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color intermediate"></div>
            <span>Intermediate (61-80%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color advanced"></div>
            <span>Advanced (81-100%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
