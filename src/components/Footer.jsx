import React from 'react';
import { socialLinks } from '../data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Aayush Nath Yogi</h3>
            <p className="footer-tagline">
              Computer Science Student & AI Enthusiast
              contact no. : 9868967331
            </p>
          </div>
          
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">
                  {social.name === 'GitHub' && '🌐'}
                  {social.name === 'LinkedIn' && '💼'}
                  {social.name === 'Twitter' && '🐦'}
                  {social.name === 'Email' && '📧'}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Aayush Nath Yogi. Full-stack developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
