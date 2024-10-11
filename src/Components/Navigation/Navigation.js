import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar container">
        <Link to="/">
          <h3>WebTesty</h3>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => (e.key === 'Enter' ? setOpen(!open) : null)}
          role="button"
          tabIndex={0}
          className="navbar-toggler"
        >
          {open ? <HiX /> : <FaBars />}
        </div>

        <div
          className={`nav-items ${open ? 'show-nav-item' : 'hide-nav-item'}`}
        >
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
