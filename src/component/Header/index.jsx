import React from 'react';
import { StyleHeader } from './style';
import { Link } from 'react-router-dom';

import logotipo from "../imagens/Braço-removebg-preview.png"

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Header = () => {
  return (
    <StyleHeader>
      <div className="container">
        <div className='definicao'>

          <Link to="/">
            <div className="logotipo">
              <img src={logotipo} alt="Logo" />
            </div>
          </Link>

      

          <div className='centralizarContent'>
            <div>
              <div className="dropdown-container">
                <div className="dropdown-button">Navigate</div>
                <ul className="dropdown-menu">
                  <li><Link to="/about-us">About us</Link></li>
                  <li><Link to="/what-we-do">What we do</Link></li>
                  <li><Link to="/technologies">Technologies</Link></li>
                  <li><Link to="/our-team">Our team</Link></li>
                  <li><Link to="/talk-to-us">Talk to us</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                </ul>
              </div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <div class="btn-service"><span class="text">Serviços</span></div>
                </li>
                <li className="fundo">
                  <RiInstagramFill />
                </li>
                <li className="fundo">
                  <FaLinkedinIn />
                </li>
                <li className="fundo">
                  <FaFacebook />
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </StyleHeader>
  );
};

