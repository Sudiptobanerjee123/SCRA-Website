// Dashboard.js
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <section className="dashboard-section">
        <div className="section-box">
          <h2>Our Vision</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>SCRA Structure</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>Meet the Founders</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>Possible Outcomes</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>Research Quote</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
