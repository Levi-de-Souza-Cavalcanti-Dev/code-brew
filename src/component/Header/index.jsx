import React, { useState } from 'react';
import { StyleHeader } from './style';

import logotipo from "../imagens/Braço-removebg-preview.png"

import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { PiFacebookLogoThin } from "react-icons/pi";

export const Header = () => {
  return (
    <StyleHeader>
      <div className="container">
        <div className="logotipo">
          <img src={logotipo} alt="Logo" />
        </div>

        <div className="dropdown-container">
          <div className="dropdown-button">Navigate</div>
          <ul className="dropdown-menu">
            <li>About us</li>
            <li>What we do</li>
            <li>Technologies</li>
            <li>Our team</li>
            <li>Talk to us</li>
            <li>Careers</li>
            <hr />
            <li>
              <a href="#blog" target="_blank" rel="noopener noreferrer">
                Blog ↗
              </a>
            </li>
            <li>
              <a href="#opensource" target="_blank" rel="noopener noreferrer">
                Open source ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <div className="btn-service">
              <label>Serviços</label>
            </div>
          </li>
          <li className="fundo">
            <CiInstagram />
          </li>
          <li className="fundo">
            <CiLinkedin />
          </li>
          <li className="fundo">
            <PiFacebookLogoThin />
          </li>
        </ul>
      </div>
    </StyleHeader>
  );
};

