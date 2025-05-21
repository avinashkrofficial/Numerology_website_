
// import React, { useState } from 'react';

// const KundaliMatch = () => {
//   const [formData, setFormData] = useState({
//     maleAddress: '',
//     femaleAddress: '',
//     maleDOB: '',
//     femaleDOB: ''
//   });

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getCoordinates = async (address) => {
//     const response = await fetch(
//       `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=71c6339f30114858a14345720b720a17`
//     );
//     const data = await response.json();

//     if (!data.results.length) {
//       throw new Error('Location not found');
//     }

//     const { lat, lng } = data.results[0].geometry;
//     return { latitude: lat, longitude: lng };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult(null);

//     try {
//       const maleCoords = await getCoordinates(formData.maleAddress);
//       const femaleCoords = await getCoordinates(formData.femaleAddress);

//       const maleDate = new Date(formData.maleDOB);
//       const femaleDate = new Date(formData.femaleDOB);

//       const payload = {
//         female: {
//           year: femaleDate.getFullYear(),
//           month: femaleDate.getMonth() + 1,
//           date: femaleDate.getDate(),
//           hours: femaleDate.getHours(),
//           minutes: femaleDate.getMinutes(),
//           seconds: 0,
//           latitude: femaleCoords.latitude,
//           longitude: femaleCoords.longitude,
//           timezone: 5.5
//         },
//         male: {
//           year: maleDate.getFullYear(),
//           month: maleDate.getMonth() + 1,
//           date: maleDate.getDate(),
//           hours: maleDate.getHours(),
//           minutes: maleDate.getMinutes(),
//           seconds: 0,
//           latitude: maleCoords.latitude,
//           longitude: maleCoords.longitude,
//           timezone: 5.5
//         },
//         config: {
//           observation_point: 'topocentric',
//           language: 'en',
//           ayanamsha: 'lahiri'
//         }
//       };

//       const res = await fetch('https://json.freeastrologyapi.com/match-making/ashtakoot-score', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': '7hs84fykMW1LoDbuG7b9O4aHcHyNTlNN5hTKmaBp'
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await res.json();
//       setResult(data);
//     } catch (err) {
//       alert('Error: ' + err.message);
//     }

//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   return (
//     <div className="background-container">
//       <h1 className="main-heading">Kundali Matching</h1>

//       <form onSubmit={handleSubmit} style={{ maxWidth: '600px', color: 'white' }}>
//         <h3>Male Details</h3>
//         <input
//           type="text"
//           name="maleAddress"
//           value={formData.maleAddress}
//           onChange={handleChange}
//           placeholder="Enter Male Birth Address"
//           className="input-field"
//         />
//         <input
//           type="datetime-local"
//           name="maleDOB"
//           value={formData.maleDOB}
//           onChange={handleChange}
//           className="input-field"
//         />

//         <h3>Female Details</h3>
//         <input
//           type="text"
//           name="femaleAddress"
//           value={formData.femaleAddress}
//           onChange={handleChange}
//           placeholder="Enter Female Birth Address"
//           className="input-field"
//         />
//         <input
//           type="datetime-local"
//           name="femaleDOB"
//           value={formData.femaleDOB}
//           onChange={handleChange}
//           className="input-field"
//         />

//         <button type="submit" className="reveal-button" style={{ marginTop: '20px' }}>
//           Match Kundalis
//         </button>
//       </form>

//       {loading && <p style={{ color: 'white' }}>Checking compatibility...</p>}

//       {result && (
//         <div className="info-box" style={{ marginTop: '30px' }}>
//           <div className="info-text">
//             <h2>Ashtakoot Score</h2>
//             <p><strong>Total Points:</strong> {result.total_points} / 36</p>
//             {result.koot && Object.entries(result.koot).map(([name, value]) => (
//               <p key={name}><strong>{name}:</strong> {value.score} points</p>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KundaliMatch;
