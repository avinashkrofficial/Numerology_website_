// src/components/SupportForm.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const SupportForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    query: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const { data, error } = await supabase.from('support_queries').insert([form]);

    if (error) {
      console.error('Supabase Error:', error);
      setMessage('⚠️ Error: ' + (error.message || 'Something went wrong.'));
    } else {
      setMessage('✅ Your query has been submitted. We will get back to you soon!');
      setForm({ name: '', email: '', query: '' });
    }
  };

  return (
    <div className="background-container">
      <h1 className="main-heading">Support</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="input-field"
          required
        />
        <textarea
          name="query"
          value={form.query}
          onChange={handleChange}
          placeholder="Your Query"
          className="input-field"
          rows="5"
          style={{ resize: 'none' }}
          required
        ></textarea>
        <button type="submit" className="reveal-button" style={{ marginTop: '20px' }}>
          Submit
        </button>
      </form>

      {message && <p style={{ color: 'white', marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default SupportForm;
