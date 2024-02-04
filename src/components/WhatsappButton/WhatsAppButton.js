// WhatsAppButton.js

import React from 'react';
import './WhatsAppButton.css';
import WhatsAppIcon from '../../assets/img/whatsapp-icon.jpg';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.location.href = 'https://wa.me/212633959676'; 
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
      <img src={WhatsAppIcon} alt="WhatsApp Icon" />
    </div>
  );
};

export default WhatsAppButton;
