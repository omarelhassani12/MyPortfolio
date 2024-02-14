import React, { useState } from 'react';
import Modal from 'react-modal';
import { allProjects } from './projectData';

import './Project.css';
import './ProjectDetailsModal.css';


const projectsPerPage = 12;

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  // Function to handle opening the modal and setting the selected project
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject?.images) {
      setSelectedImageIndex(selectedImageIndex === selectedProject.images.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (selectedProject?.images) {
      setSelectedImageIndex(selectedImageIndex === 0 ? selectedProject.images.length - 1 : selectedImageIndex - 1);
    }
  };


  //
  const renderIcons = () => {
    if (window.innerWidth <= 768) {
      return (
        <>
          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fas fa-external-link-alt icon"></i>
          </a>
          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-github icon"></i>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fas fa-external-link-alt icon"></i> <span>View Project</span>
          </a>
          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-github icon"></i> <span>View GitHub</span>
          </a>
        </>
      );
    }
  };

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
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href='#' onClick={() => handleProjectClick(project)}>
              <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-content">
                <h3><a href={project.url}>{project.title}</a></h3>
                <span className="category-tag">{project.category}</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="pagination">
        <div>
          <span>Page {currentPage} from {totalPages}</span>
        </div>
        <div className="paginationButtons">
          <button onClick={handlePreviousPage} className={currentPage === 1 ? 'notAnyPage' : 'paginationButton'}>Back</button>
          <button onClick={handleNextPage} className={currentPage === totalPages ? 'notAnyPage' : 'paginationButton'}>Next</button>
        </div>
      </div>

      {/* Modal for displaying project details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="modal-header">
          <h2>{selectedProject?.title}</h2>
          <div className="modal-icons">
          {selectedProject && renderIcons()}

          </div>
          <button className="close-button" onClick={handleModalClose}>X</button>
        </div>
        <div className="modal-body content-container">
          <div className="modal-left content">
            <div className="modal-top-half">
            <h4>About {selectedProject?.title}</h4>
              {selectedProject?.description && selectedProject.description.map((desc, index) => (
                <div key={index}>{desc}</div>
              ))}
            </div>
            <hr/>
            <div className="modal-bottom-half">
              <h4>Tools</h4>
              <div className="tools-list">
                {selectedProject?.tools && selectedProject.tools.map((tool, index) => (
                  <span key={index} className="tool" style={{ color: `#${Math.floor(Math.random()*16777215).toString(16)}`,marginRight: '10px' }}>
                    #{tool} 
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-right content">
            <div className="image-container">
              {selectedProject?.images &&
                <img src={selectedProject.images[selectedImageIndex]} alt={selectedProject?.title} />
              }
              <div className="navigation-buttons">
                {selectedProject?.images && selectedProject.images.length > 1 &&
                  <>
                    <a href='#' onClick={handlePreviousImage}>
                      <i className="fas fa-chevron-left"></i>
                    </a>
                    <a href='#' onClick={handleNextImage}>
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Projects;
