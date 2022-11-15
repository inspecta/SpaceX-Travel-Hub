import React from 'react';
import logo from '../images/planet.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activePage = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    < header className="navbar" >
      <img src={logo} className="logo" alt="logo" />
      <h1 className="logo-title"> Space Travelers' Hub </h1>
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
    </header >
  )
};

export default Navbar;
