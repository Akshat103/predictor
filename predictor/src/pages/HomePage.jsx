import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>College Predictor</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
          Predict your B.Tech college admissions using MPDTE data for the first round.
          Get accurate predictions based on your rank, category, gender, and MP domicile.
        </p>
        <Link to="/predict">
          <Button type="primary" size="large">Predict Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
