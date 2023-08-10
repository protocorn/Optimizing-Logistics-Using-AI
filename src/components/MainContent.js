// MainContent.js
import React from 'react';
import './MainContent.css'; // Import your CSS file for styling

function MainContent() {
  return (
    <div className="main-content">
      <h1>Warehouse Admin Dashboard</h1>
      <div className="card-container">
        {/* Budget Card */}
        <div className="card">
          <div className="card-heading">
            <h3>BUDGET</h3>
            <img src={'/budget.png'} alt="Budget" />
          </div>
          <p className="card-value">$1.5M</p>
        </div>
        {/* Total Customers Card */}
        <div className="card">
          <div className="card-heading">
            <h3>TOTAL CUSTOMERS</h3>
            <img src='/customer.png' alt="Task Progress" />
          </div>
          <p className="card-value">2.5K</p>
        </div>
        {/* Task Progress Card */}
        <div className="card">
          <div className="card-heading">
            <h3>TASK PROGRESS</h3>
            <img src="/progress.png" alt="Task Progress" />
          </div>
          <p className="card-value">$50M</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
        </div>
        {/* Total Profit Card */}
        <div className="card">
          <div className="card-heading">
            <h3>TOTAL PROFIT</h3>
            <img src="/profit.png" alt="Total Profit" />
          </div>
          <p className="card-value">$5.3K</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
