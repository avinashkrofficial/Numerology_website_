import React from 'react';

const OutputSection = () => (
  <div className="output">
    <div className="output-header">
      <h1>Hooray!</h1>
      <p>
        You’ve unlocked the secrets of your Destiny and Psyche Numbers.<br />
        ✨ Ready to discover what the universe has written in your name and birth date?
      </p>
    </div>
    <main className="main-section">
      <div className="wheel-container">
        <img src="/logo2.png" alt="Zodiac Wheel" className="wheel" />
      </div>
      <div className="info-box">
        <div className="info-text">
          <p><strong>Mulank:</strong> 2 &nbsp;&nbsp;&nbsp;&nbsp; <strong>Bhagyank:</strong> 3</p>
          <p><strong>Lord Planet:</strong> 🌕 Moon</p>
          <p><strong>Luck:</strong> 50 &nbsp;&nbsp;&nbsp;&nbsp; <strong>Lucky Numbers:</strong> 1, 2, 3</p>
          <p><strong>Lucky Colours:</strong> White, Cream, Light Yellow</p>
          <p><strong>Qualities:</strong> Moody, Emotional, Born Healer, Listener, Nature Lover</p>
        </div>
      </div>
    </main>
  </div>
);

export default OutputSection;