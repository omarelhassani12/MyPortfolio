// Project.js

import React, { useState } from 'react';
import './Project.css';
import ofpptImage from '../../assets/companies/ofppt.png';


const allProjects = [
  { id: 0, title: 'Tabibi', category: 'Mobile', image: ofpptImage, url: 'https://github.com/omarelhassani12/Tabibi' },
  { id: 1, title: 'Absence Management System', category: 'Web', image: ofpptImage, url: 'https://github.com/omarelhassani12/gestion_d_absence' },
  { id: 2, title: 'Medical Cabinet System', category: 'Web', image: ofpptImage, url: 'https://github.com/omarelhassani12/Medical_Web_site' },
  { id: 3, title: 'Appointify', category: 'Mobile', image: ofpptImage, url: 'https://github.com/omarelhassani12/Appointify' },
  { id: 4, title: 'Saska', category: 'Design', image: ofpptImage, url: '#' },
  { id: 5, title: 'Stock Management System', category: 'Web', image: ofpptImage, url: 'https://github.com/omarelhassani12/Management-stock' },
  { id: 6, title: 'Scentit', category: 'Web', image: ofpptImage, url: 'https://omarelhassani12.github.io/Scentit/' },
  { id: 7, title: 'Tabibi Web', category: 'Web', image: ofpptImage, url: 'https://github.com/omarelhassani12/Tabibi_panel' },
  { id: 8, title: 'Restaurant Reservation', category: 'Design', image: ofpptImage, url: 'https://github.com/omarelhassani12/restaurant_reservation_flutter_app' },
  { id: 9, title: 'BrainWave', category: 'Mobile', image: ofpptImage, url: 'https://github.com/omarelhassani12/school_app' },
  { id: 10, title: 'AsrooShop', category: 'Mobile', image: ofpptImage, url: 'https://github.com/omarelhassani12/AsrooShop-using-flutter-and-firebase' },
  { id: 11, title: 'Interns Management System', category: 'Web', image: ofpptImage, url: 'https://github.com/omarelhassani12/Stagiares-management-' },
  { id: 12, title: 'Staffs Management System', category: 'Web', image: ofpptImage, url: 'https://github.com/omarelhassani12/SimpleStaffManagement' },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      <div className="filter-container">
        <select
          id="filter-select"
          onChange={(e) => setActiveFilter(e.target.value)}
          value={activeFilter}
        >
          <option value="All">All</option>
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href="#">
              <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-content">
                <h3><a href={project.url}>{project.title}</a></h3>
                <span className="category-tag">{project.category}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
