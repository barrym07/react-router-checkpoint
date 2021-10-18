import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <h1> Social Place</h1>
      <ul className="nav-links">

        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>


        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>

        <Link style={navStyle} to='/profiles'>
          <li>Profiles</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;