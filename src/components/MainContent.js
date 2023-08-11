// MainContent.js
import React from 'react';
import './MainContent.css'; // Import your CSS file for styling
//import SalesComparisonChart from './SalesComparisonChart';
import { BarGraph } from './BarGraph';
import { useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function MainContent() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      // You can add more datasets if needed
    ],
  };
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
      <BarGraph chartData={chartData} />
    </div>
  );
}

export default MainContent;
