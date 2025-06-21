import React, { useState } from 'react';
import { StyleHeader } from './style';
import { Link } from 'react-router-dom';
import logotipo from "../imagens/Braço-removebg-preview.png"
import { FaFacebook, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyleHeader>
      <div className="container">
        <div className='definicao'>
          <Link to="/">
            <div className="logotipo">
              <img src={logotipo} alt="Logo" />
            </div>
          </Link>

          <div className='menu-icon' onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`nav-container ${menuOpen ? 'active' : ''}`}>
            <nav className="desktop-nav">
              <Link to="/about-us">Sobre Nós</Link>
              <Link to="/what-we-do">O que Fazemos</Link>
              <Link to="/technologies">Tecnologias</Link>
              <Link to="/talk-to-us">Fale Conosco</Link>
            </nav>
            <div className="social-media">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fundo"><RiInstagramFill /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="fundo"><FaLinkedinIn /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fundo"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </StyleHeader>
  );
};

