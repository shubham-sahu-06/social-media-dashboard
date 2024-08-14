import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Settings({ onNavigate }) {
  const [linkedinURL, setLinkedinURL] = useState('');
  const [githubURL, setGithubURL] = useState('');

  const email = 'shubhamsahu3080@gmail.com'; // You can replace this with dynamic data

  useEffect(() => {
    // Fetch user data from the backend
    axios.get(`http://localhost:5000/api/users/${email}`)
      .then(response => {
        if (response.data) {
          setLinkedinURL(response.data.linkedin);
          setGithubURL(response.data.github);
        }
      })
      .catch(error => console.log(error));
  }, [email]);

  const handleSave = () => {
    // Update user data in the backend
    axios.put(`http://localhost:5000/api/users/${response.data.id}`, {
      linkedinURL,
      githubURL,
    })
      .then(() => {
        alert('Settings saved!');
        onNavigate('dashboard');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <p>Manage your social media accounts here.</p>
      <p>Email: {email}</p>
      <div className="social-input">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
        <input
          type="text"
          value={linkedinURL}
          onChange={(e) => setLinkedinURL(e.target.value)}
          placeholder="Enter your LinkedIn profile URL"
        />
      </div>
      <div className="social-input">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
        <input
          type="text"
          value={githubURL}
          onChange={(e) => setGithubURL(e.target.value)}
          placeholder="Enter your GitHub profile URL"
        />
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default Settings;
