// import React from 'react';
// import './Navigation.css';

// function Navigation() {

//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         {/* <li><a href="/about">About</a></li> */}
//         <li><a href="/experience">Experience</a></li>
//         <li><a href="/education">Education</a></li>
//         <li><a href="/projects">Projects</a></li>
//         <li><a href="/skills">Skills</a></li>
//         <li><a href="/certificates">Certificates</a></li>
//         <li><a href="/blog">Blogs</a></li>
//         <li><a href="/contact">Say Hi!</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from 'react';
import './Navigation.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navigation() {
  const [showNav, setShowNav] = useState(false); 

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav>
      {/* Mobile navigation with icon */}
      <div className="mobile-nav-icon" onClick={toggleNav}>
        {showNav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile navigation links */}
      <ul className={`nav-links ${showNav ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
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