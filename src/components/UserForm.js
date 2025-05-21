// src/components/UserForm.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const UserForm = () => {
  const [form, setForm] = useState({
    name: '',
    homepage_name: '',
    dob: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const { data, error } = await supabase
      .from('users')
      .insert([form]);

    if (error) {
      setMessage('Error saving data: ' + error.message);
    } else {
      setMessage('User data saved successfully!');
      setForm({ name: '', homepage_name: '', dob: '' });
    }
  };

  return (
    <div className="background-container">
      <h1 className="main-heading">Save Your Numerology Info</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="input-field"
        />
        <input
          type="text"
          name="homepage_name"
          value={form.homepage_name}
          onChange={handleChange}
          placeholder="Homepage Name"
          className="input-field"
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="reveal-button" style={{ marginTop: '20px' }}>
          Save
        </button>
      </form>

      {message && <p style={{ color: 'white', marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default UserForm;
