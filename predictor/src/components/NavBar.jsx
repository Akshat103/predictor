import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const items = [
    {
      key: 'home',
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'predict',
      label: <Link to="/predict">Predict</Link>,
    },
  ];

  return (
    <Menu theme='dark' mode="horizontal" items={items} />
  );
};

export default NavBar;