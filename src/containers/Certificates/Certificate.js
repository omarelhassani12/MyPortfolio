// Certificates.js
import React from 'react';
import './Certificate.css';
import {certificates} from './CertificateData.js';

function Certificates() {
  return (
    <section id="certificate">
      <div id="certificate-list">
        {certificates.map((certificate, index) => (
          <div id="certificate-item" key={index} style={{ backgroundImage: `url(${certificate.backgroundImage})` }}>
            <div id="certificate-text">
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
