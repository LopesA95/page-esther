// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importe o arquivo CSS

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"> Esther Maia</h1>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Projetos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Serviços</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
