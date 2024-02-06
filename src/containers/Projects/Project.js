// Project.js

import React, { useState, useEffect  }     from 'react';
import './Project.css';
import Modal from 'react-modal';



import ofpptImage from '../../assets/companies/devosoft.png';
const projectsPerPage = 12;

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
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? currentPage : currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);


  //for the model
  const [modalIsOpen, setModalIsOpen] = useState(true);


  useEffect(() => {
    // Close the modal after 3 seconds
    const timeout = setTimeout(() => {
      setModalIsOpen(false);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);


  
  return (
    <div className="projects-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Alert"
        style={{
          content: {
            width: '25%',
            height: '10%',
            margin: 'auto',
            color: 'red', 
            borderRadius: '20px', 
          }
        }}
      >
        <h4>To view details, please click on the project title.</h4>
      </Modal>

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
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.url}>
              <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-content">
                <h3><a href='#'>{project.title}</a></h3>
                <span className="category-tag">{project.category}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      {/* <div className="projects-list">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.url}>
              <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-content">
                <h3><a href='#'>{project.title}</a></h3>
                <span className="category-tag">{project.category}</span>
              </div>
            </a>
            <div className="project-icons">
              {project.url && project.url.startsWith('https://github.com') && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github github-icon"></i>
                </a>
              )}
              {project.url && !project.url.startsWith('https://github.com') && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt link-icon"></i>
                </a>
              )}
            </div>

          </div>
        ))}
      </div> */}

      <div className="pagination">
        <div>
          <span>Page {currentPage} from {totalPages}</span>
        </div>
        <div className="paginationButtons">
          <button onClick={handlePreviousPage} className={currentPage === 1 ? 'notAnyPage' : 'paginationButton'}>Back</button>
          <button onClick={handleNextPage} className={currentPage === totalPages ? 'notAnyPage' : 'paginationButton'}>Next</button>
      </div>
      </div>
    </div>
  );
}

export default Projects;