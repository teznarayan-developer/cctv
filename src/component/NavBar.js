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
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/header">Header</NavLink>
    </div>
    </div>
    </nav>
    <hr />
    <div className='navbar'>
    <nav2>
      <a href="#">fb</a>
      <a href="#">link</a>
      <a href="#">insta</a>
    </nav2>
    </div>
    </div>
  )
}

export default NavBar;