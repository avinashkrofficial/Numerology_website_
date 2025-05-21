import React, { useState } from 'react';

const SunSignPage = () => {
  const [dob, setDob] = useState('');
  const [zodiac, setZodiac] = useState(null);

  const findZodiacSign = async () => {
    if (!dob) {
      alert('Please select your date of birth');
      return;
    }

    const [year, month, day] = dob.split('-').map(Number);
    const inputDate = new Date(2000, month - 1, day); // fixed year for zodiac range matching

    try {
      const res = await fetch('/zodiac_signs.json');
      const signs = await res.json();

      const matched = signs.find(sign => {
        const [start, end] = sign.date_of_birth.split(' to ');
        const [startMonth, startDay] = start.split('-').map(Number);
        const [endMonth, endDay] = end.split('-').map(Number);

        const startDate = new Date(2000, startMonth - 1, startDay);
        const endDate = new Date(2000, endMonth - 1, endDay);

        if (startDate <= endDate) {
          return inputDate >= startDate && inputDate <= endDate;
        } else {
          // For signs like Capricorn that span end/start of year
          return inputDate >= startDate || inputDate <= endDate;
        }
      });

      if (matched) {
        setZodiac(matched);
      } else {
        setZodiac(null);
        alert('No matching zodiac sign found');
      }
    } catch (err) {
      console.error('Error loading zodiac data:', err);
    }
  };

  return (
    <div className="background-container">
      <h1 className="main-heading">Know Your Sun Sign</h1>

      <input
        type="date"
        className="input-field"
        value={dob}
        onChange={e => setDob(e.target.value)}
      />
      <button className="reveal-button" onClick={findZodiacSign}>Reveal Sun Sign</button>

      {zodiac && (
        <div className="info-box" style={{ marginTop: '30px' }}>
          <div className="info-text">
            <h2>{zodiac.sign} ({zodiac.symbol})</h2>
            <p><strong>Element:</strong> {zodiac.element}</p>
            <p><strong>Ruling Planet:</strong> {zodiac.ruling_planet}</p>
            <p><strong>Strengths:</strong> {zodiac.strengths.join(', ')}</p>
            <p><strong>Weaknesses:</strong> {zodiac.weaknesses.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SunSignPage;
