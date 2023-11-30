'use client'
// pages/dashboard.tsx
import React, { useState } from 'react';
import { useClerk } from '@clerk/nextjs';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const { user } = useClerk();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [link, setLink] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = user.id;

    const formData = { userId, firstName, lastName, emailAddress, link };

    try {
      // Send a POST request to your server-side API route
      const response = await axios.post('http://localhost:8000/user', formData);

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
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email Address:
          <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
        </label>
        <label>
          Link:
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Dashboard;
