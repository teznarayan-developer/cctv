import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <a href="https://incretech.in/"><h1>Incretech</h1></a>
          <div className='navLink'>
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
          </div>
        </div>
      </nav>
      <hr />
      <div className='navbar'>
        <div className='navBar2'>
          <div>
            <a href="#">fb</a>
            <a href="#">link</a>
            <a href="#">insta</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar;