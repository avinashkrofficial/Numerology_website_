import React, { useState, useRef } from 'react';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);
  const outputRef = useRef(null);

  const calculateNumbers = async () => {
    if (!dob) {
      alert('Please select your Date of Birth');
      return;
    }

    // Convert from YYYY-MM-DD to DDMMYYYY
    const [year, month, day] = dob.split('-');
    const formattedDob = `${day}${month}${year}`;

    const mulank = reduceToOneDigit(parseInt(day));
    const bhagyank = reduceToOneDigit(
      formattedDob.split('').reduce((sum, digit) => sum + parseInt(digit || 0), 0)
    );

    try {
      const response = await fetch('/numerology_data.json');
      const data = await response.json();
      const match = data.find(d => d.Mulank === mulank && d.Bhagyank === bhagyank);

      if (match) {
        setResult({ mulank, bhagyank, ...match });

        setTimeout(() => {
          outputRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setResult(null);
        alert('No data found for your numbers');
      }
    } catch (err) {
      console.error('Error fetching numerology data:', err);
    }
  };

  const reduceToOneDigit = (num) => {
    while (num > 9) {
      num = num.toString().split('').reduce((a, b) => +a + +b, 0);
    }
    return num;
  };

  return (
    <>
      <div className="background-container">
        <h1 className="main-heading">Unlock the mysteries of<br />your Life</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="input-field"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="date"
          className="input-field"
          value={dob}
          onChange={e => setDob(e.target.value)}
        />
        <button className="reveal-button" onClick={calculateNumbers}>Reveal My Numbers</button>
      </div>

      {result && (
        <div ref={outputRef} className="output">
          <div className="output-header">
            <h1>Hooray!</h1>
            <p>You’ve unlocked your numerology insights!</p>
          </div>
          <main className="main-section">
            <div className="wheel-container">
              <img src="/logo2.png" alt="Zodiac Wheel" className="wheel" />
            </div>
            <div className="info-box">
              <div className="info-text">
                <p><strong>Mulank:</strong> {result.mulank} &nbsp;&nbsp;&nbsp;&nbsp; <strong>Bhagyank:</strong> {result.bhagyank}</p>
                <p><strong>Lord Planet:</strong> 🌟 {result.Lord_Planet}</p>
                <p><strong>Luck:</strong> {result.luck} &nbsp;&nbsp;&nbsp;&nbsp; <strong>Lucky Numbers:</strong> {result.Lucky_number}</p>
                <p><strong>Lucky Colours:</strong> {result.Lucky_colour}</p>
                <p><strong>Qualities:</strong> {result.Qualities}</p>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default HeroSection;
