import React, {useState} from 'react';
import './Blog.css';
import {blogs} from './BlogData.js';

function formatDate(dateString) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function Blogs() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);

  const handleLanguageChange = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleFrameworkChange = (framework) => {
    if (selectedFrameworks.includes(framework)) {
      setSelectedFrameworks(selectedFrameworks.filter((fw) => fw !== framework));
    } else {
      setSelectedFrameworks([...selectedFrameworks, framework]);
    }
  };

  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedFrameworks([]);
  };

  const filtersApplied = selectedLanguages.length > 0 || selectedFrameworks.length > 0;


  const filteredBlogs = blogs.filter((blog) => {
    if (selectedLanguages.length === 0 && selectedFrameworks.length === 0) {
      return true;
    }
    const langMatches = selectedLanguages.every((lang) => blog.langaugs.includes(lang));
    const fwMatches = selectedFrameworks.every((fw) => blog.Frameworks.includes(fw));
    return langMatches && fwMatches;
  });

  return (
    <div className="blogs-container">
      <div className="code-section">
        <section id="filters">
        <div className="filter-section">
          <h4>Refine Your Search:</h4>
            {Array.from(new Set(blogs.flatMap((blog) => blog.langaugs))).map((language) => (
              <label key={language}>
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleLanguageChange(language)}
                />
                {language}
              </label>
            ))}
          </div>
          <div className="filter-section">
            {Array.from(new Set(blogs.flatMap((blog) => blog.Frameworks))).map((framework) => (
              <label key={framework}>
                <input
                  type="checkbox"
                  checked={selectedFrameworks.includes(framework)}
                  onChange={() => handleFrameworkChange(framework)}
                />
                {framework}
              </label>
            ))}
          </div>
          {filtersApplied && <button id="clear-filters-btn" onClick={clearFilters}>Clear Filters</button>}
        </section>
        <section id="blogs">
          <div className="blog-list">
            {filteredBlogs.map((blog, index) => (
              <div id="blog-item" key={index}>
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
                <p>On {formatDate(blog.date)}</p>
                <p>Written By {blog.author ? blog.author : "me"}</p>
                <a href={blog.url} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blogs;
