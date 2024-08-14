import React from 'react';

function Dashboard({ onNavigate }) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your social media dashboard! Your connected social media feeds will appear here.</p>
      {/* Placeholder for social media feeds */}
      <button onClick={() => onNavigate('settings')}>Go to Settings</button>
    </div>
  );
}

export default Dashboard;
