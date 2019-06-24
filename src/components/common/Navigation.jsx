import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
  return (
    <nav className="navbar">
      <h1>Use My Tools</h1>
      <div>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/faq'>FAQ</NavLink>
        <NavLink to='/create-account'>Create Account</NavLink>
        <NavLink to='/sign-in'>Sign In</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;