import React from 'react';
import './Footer.css'; 

function Footer() {
  const socialMedia = [
    { platform: 'Github', link: 'https://github.com/Omarelhassani12', iconClass: 'fab fa-github' },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/Omarelhassani12', iconClass: 'fab fa-linkedin' },
  ];
  const CR = " 2024 EL HASSANI Omar. Made with ";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
        {socialMedia.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.iconClass}></i>
            </a>
          ))}
        </div>
        <p className="centered-text">&copy;{CR}<span>❤</span>.</p>
      </div>
    </footer>
  );
}

export default Footer;
