// src/App.js
import KundaliMatch from './components/KundaliMatch';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Team from './components/Team';
import Footer from './components/Footer';
import SunSignPage from './components/SunSignPage';
import IntroPage from './components/IntroPage';
import UserForm from './components/UserForm';
import SupportForm from './components/SupportForm';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOutIntro, setFadeOutIntro] = useState(false);

  const handleStart = () => {
    setFadeOutIntro(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1000); // match the CSS animation duration (1s)
  };

  return (
    <Router>
      <div className="background-blur"></div>
      {showIntro ? (
        <IntroPage onStart={handleStart} fadeOut={fadeOutIntro} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <InfoSection />
                  <Team />
                </>
              }
            />
            <Route path="/sun-sign" element={<SunSignPage />} />
            <Route path="/save-user" element={<UserForm />} />
            <Route path="/kundali-match" element={<KundaliMatch />} />
            <Route path="/support" element={<SupportForm />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
