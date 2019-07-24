import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div className="container">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/articles-list">Articles</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;