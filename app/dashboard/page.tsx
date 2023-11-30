'use client'
import React, { useState } from 'react';
import { useClerk } from '@clerk/nextjs';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const { user } = useClerk();
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [links, setLinks] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = user.id;

    const formData = { userId, fullName, location, links };

    try {
      // Send a POST request to your server-side API route
      const response = await axios.post('/api/saveUserData', formData);

      // Handle the response from the server
      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <section>
      <h1>Welcome, {user?.primaryEmailAddress.toString()}</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Links:
          <input type="text" value={links} onChange={(e) => setLinks(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Dashboard;
