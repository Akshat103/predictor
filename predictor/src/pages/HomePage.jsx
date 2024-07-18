import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#c7c7c7', padding: '20px', textAlign: 'center' }}>
        <img src="/assets/collegexpert-logo-transparent.webp" alt="College Predictor Logo" style={{ height: '50px' }} />
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>MP DTE College Predictor {new Date().getFullYear()}</h1>
        <p style={{ fontSize: '1rem', margin: '10px 0' }}>Your Gateway to Top Colleges in Madhya Pradesh</p>
      </header>
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Predict Your College Admission</h2>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '700px', marginBottom: '2rem' }}>
          Use our MP DTE College Predictor to find the best B.Tech, MBA, M.Tech, and other courses based on your rank, category, and domicile.
          Get insights on top colleges in Madhya Pradesh, including cutoff ranks, fees, and more.
        </p>
        <Link to="/dte-mp-colleges-predictor">
          <Button type="primary" size="large">Predict Now</Button>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
