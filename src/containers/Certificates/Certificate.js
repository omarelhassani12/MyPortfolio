// Certificates.js
import React from 'react';
import './Certificate.css';
import {certificates} from './CertificateData.js';

function Certificates() {
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
