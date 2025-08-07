import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Portfolio</h1>
    <ul className="navbar-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#certificates">Certificates</a></li>
    </ul>
  </nav>
);

export default Navbar;