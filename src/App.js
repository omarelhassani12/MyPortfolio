// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AppRoutes from './Routes';
import WhatsAppButton from './components/WhatsappButton/WhatsAppButton';

function App() {
  return (
    <div className="app-container">
      <div className="header-nav-container">
        <Header />
        <Navigation />
      </div>
      <div className="content-container">
        <AppRoutes />
      </div>
      {/* WhatsAppButton component */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
