import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <p style={{ margin: '0' }}>&copy; {new Date().getFullYear()}  CollegeXpert. Ltd.  All Rights Reserved</p>
      <div style={{ marginTop: '10px' }}>
        <Link to="/about" style={{ color: '#fff', margin: '0 10px' }}>About Us</Link>
        <Link to="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact Us</Link>
      </div>
    </footer>

  );
};

export default Footer;
