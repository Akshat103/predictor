import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f2f5' }}>
      College Predictor &copy; {new Date().getFullYear()} All rights reserved.
    </footer>
  );
};

export default Footer;
