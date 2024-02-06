// App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routes';
import WhatsAppButton from './components/WhatsappButton/WhatsAppButton';
import NoSelectWrapper from './NoSelectWrapper';

function App() {
  return (
    <NoSelectWrapper>
      <div className="app-container">
        <div className="header-nav-container">
          <Header />
          <Navigation />
        </div>
        <div className="content-container">
          <AppRoutes />
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </NoSelectWrapper>
  );
}

export default App;
