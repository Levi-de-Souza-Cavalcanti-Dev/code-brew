import React from 'react';
import { StyleHeader } from './style';

import logotipo from "../imagens/Braço-removebg-preview.png"

export const Header = () => {
  return (
    <StyleHeader>
        <div className='container'>
        <div className='logotipo'>
            <img src={logotipo} />

        </div>

        <div className='menu'></div>
        </div>
        
    </StyleHeader>
  );
}
