import React from 'react';
import logo from '../images/planet.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <header className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="store-title"> Space Travelers' Hub </h1>
      <nav>
        <ul className="NavLinks">
          <li>
            <NavLink to="/" >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions/">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile/">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
  
  export default Navbar;
  