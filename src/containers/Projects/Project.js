// Projects.js

import React, { useState } from 'react';
import './Project.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all'); // Default filter

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const projectsData = [
    { title: 'Project 1', category: 'all', description: 'Description for Project 1' },
    { title: 'Project 2', category: 'category1', description: 'Description for Project 2' },
    { title: 'Project 2', category: 'category1', description: 'Description for Project 2' },
    { title: 'Project 2', category: 'category1', description: 'Description for Project 2' },
    { title: 'Project 3', category: 'category2', description: 'Description for Project 3' },
    { title: 'Project 3', category: 'category2', description: 'Description for Project 3' },
    { title: 'Project 3', category: 'category2', description: 'Description for Project 3' },
    { title: 'Project 3', category: 'category2', description: 'Description for Project 3' },
    { title: 'Project 2', category: 'category1', description: 'Description for Project 2' },
    { title: 'Project 2', category: 'category1', description: 'Description for Project 2' },
    { title: 'Project 2', category: 'category1', description: 'Description for Project 2' },
    { title: 'Project 3', category: 'category2', description: 'Description for Project 3' },
    // Add more project data
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="project-container">
      <div className="project-filter">
        <button onClick={() => handleFilterChange('all')} className={activeFilter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilterChange('category1')} className={activeFilter === 'category1' ? 'active' : ''}>Category 1</button>
        <button onClick={() => handleFilterChange('category2')} className={activeFilter === 'category2' ? 'active' : ''}>Category 2</button>
        {/* Add more buttons for other categories */}
      </div>

      {/* Display filtered projects */}
      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
