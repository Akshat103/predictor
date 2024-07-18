import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const items = [
    {
      key: 'logo',
      label: <Link to="/"><img src="/assets/collegexpert-favicon-white.svg" alt="CollegeXpert Logo" style={{ height: '40px' }} /></Link>
    },
    {
      key: 'home',
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'predict',
      label: <Link to="/dte-mp-colleges-predictor">Predict</Link>,
    },
    {
      key: 'about',
      label: <Link to="/about">About Us</Link>,
    },
    {
      key: 'contact',
      label: <Link to="/contact">Contact</Link>,
    },
  ];

  return (
    <div className="navbar">
    <Menu theme="dark" mode="horizontal" items={items} />
    </div>
  );
};

export default NavBar;
