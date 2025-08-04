import React from 'react';
import { StyleFooter } from './style';
import { Link } from 'react-router-dom';

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>

    <StyleFooter>
        <div>
            <ul>
              <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/what-we-do">What we do</Link></li>
                <li><Link to="/technologies">Technologies</Link></li>
                <li><Link to="/talk-to-us">Talk to us</Link></li>
            </ul>
        </div>

        <div>
          <ul>
            <li ><RiInstagramFill /></li>
            <li><FaLinkedinIn /></li>
            <li><FaFacebook /></li>
          </ul>
        </div>
    </StyleFooter>

</>
   
  );
};

