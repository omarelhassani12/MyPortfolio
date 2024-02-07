// Certificates.js
import React from 'react';
import './Certificate.css';

function Certificates() {
  const certificates = [
    {
      name: "Certified Application Security Practitioner(CAP)",
      issuer: "The SecOps Group",
      date: "February 2024",
      backgroundImage: require('../../assets/certificates/CAP.png')
    },
    {
      name: "Certificate in JavaScript Fundamentals",
      issuer: "ABC Institute",
      date: "March 2022",
      backgroundImage: require('../../assets/certificates/CAP.png')
    },
  ];

  return (
    <section id="certificates">
      <div className="certificates-list">
        {certificates.map((certificate, index) => (
          <div className="certificate-item" key={index} style={{ backgroundImage: `url(${certificate.backgroundImage})` }}>
            <div className="certificate-text">
              <h3>{certificate.name}</h3>
              <p>Issuer: <b>{certificate.issuer}</b></p>
              <p>Date of Issuance: <b>{certificate.date}</b></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
