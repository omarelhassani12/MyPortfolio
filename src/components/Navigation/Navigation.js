import React from 'react';
import './Navigation.css';

function Navigation() {

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {/* <li><a href="/about">About</a></li> */}
        <li><a href="/experience">Experience</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/certificates">Certificates</a></li>
        <li><a href="/blog">Blogs</a></li>
        <li><a href="/contact">Say Hi!</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
