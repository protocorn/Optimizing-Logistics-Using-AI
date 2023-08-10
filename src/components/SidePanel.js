// SidePanel.js
import React from 'react';
import './SidePanel.css'; // Import your CSS file for styling

function SidePanel() {
  return (
    <div className="side-panel">
      <div className="profile-section">
        <div className="profile-photo">
          {/* Replace with your profile photo */}
        </div>
        <div className="role">Warehouse Administrator</div>
      </div>
      <div className="menu-section">
      <div className="sub-heading active">Dashboard</div>
        <div className="section">
          <h2 className="section-heading">Products</h2>
          <div className="sub-heading">Create Products</div>
          <div className="sub-heading">Category</div>
          {/* ... (more subheadings) */}
        </div>
        <div className="section">
          <h2 className="section-heading">Inventory</h2>
          <div className="sub-heading">Order Requests</div>
          <div className="sub-heading">Charts</div>
          {/* ... (more subheadings) */}
        </div>
        {/* ... (more sections) */}
      </div>
    </div>
  );
}

export default SidePanel;