import React from 'react';
import './IntroPage.css';
import bgImage from '../assets/back2.png'; // ✅ import the image

const IntroPage = ({ onStart, fadeOut }) => {
  return (
    <div
      className={`intro-body ${fadeOut ? 'fade-out' : ''}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="title-wrap">
        <span className="divya-text">दिव्य</span>
        <span className="digits-text">DIGITS</span>
      </div>
      <img src="/logo2.png" alt="Zodiac Circle" className="zodiac-circle" />
      <button className="button-decode" onClick={onStart}>Decode your Destiny</button>
      <div className="quote">"In every number, a secret of the universe lies hidden."</div>
    </div>
  );
};

export default IntroPage;
