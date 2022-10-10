import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navbar container">
      <Link to="/">
        <h3>WebTesty</h3>
      </Link>
      <div className="nav-items">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
