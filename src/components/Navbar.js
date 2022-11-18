import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => {
  const activePage = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? '#000' : '#595959',
  });

  return (
    <header className="navbar">
      <div className="logo-head">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="logo-title">Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <ul className="NavLinks">
          <li>
            <NavLink to="/" end style={activePage}>
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions/" style={activePage}>
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile/" style={activePage}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
