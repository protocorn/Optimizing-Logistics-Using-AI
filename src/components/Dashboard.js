// Dashboard.js
import React from 'react';
import SidePanel from './SidePanel';
import MainContent from './MainContent';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <SidePanel />
      <MainContent />
    </div>
  );
}

export default Dashboard;
