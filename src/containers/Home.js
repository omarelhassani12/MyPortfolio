// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id="home-container">
      <div id="content-container">
        <div id="content">
          <h3>Welcome to My Portfolio</h3>
          <p>Embark on a journey through the diverse realms of my work and skills. From web development and mobile applications to design, I am fueled by a passion for crafting exceptional digital experiences. Navigate through the pages to delve deeper into my professional journey!</p>
        </div>

        <div id="content">
          <h3>About Me</h3>
          <p>
            This is a dedicated and passionate web and mobile developer, certified in AppSec (CAP), with a knack for crafting intuitive UX/UI experiences. Hailing from Marrakesh-Safi, Morocco, I bring a unique blend of technical expertise and artistic sensibility to every project.
          </p>
          <p>
            My journey in computer engineering has equipped me with a strong foundation, and I am always eager to explore new opportunities to expand my skills and stay abreast of the latest technological trends. I approach each project with the goal of providing efficient technical solutions while infusing creativity into the design process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
