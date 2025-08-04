import React from 'react';
import {
  sectionStyle,
  titleStyle,
  subtitleStyle,
  cardGrid,
  cardStyle,
  iconStyle,
  paragraphStyle,
  highlightStyle,
  listStyle,
  finalParagraphStyle
} from './style';

const WhatWeDo = () => (
  <div style={sectionStyle}>
    <h1 style={titleStyle}>O que fazemos</h1>
    <p style={paragraphStyle}>
      Na <span style={highlightStyle}>Code Brew</span>, desenvolvemos soluções digitais sob medida para transformar negócios e ideias em experiências inovadoras.
    </p>
    <h2 style={subtitleStyle}>Nossos Serviços</h2>
    <div style={cardGrid}>
      <div style={cardStyle}>
        <i className="fas fa-code" style={iconStyle}></i>
        <h3>Desenvolvimento Web</h3>
        <p>Sites, sistemas e portais modernos, responsivos e de alta performance.</p>
      </div>
      <div style={cardStyle}>
        <i className="fas fa-cogs" style={iconStyle}></i>
        <h3>Automações</h3>
        <p>Automatizamos processos para aumentar a eficiência e produtividade do seu negócio.</p>
      </div>
      <div style={cardStyle}>
        <i className="fas fa-server" style={iconStyle}></i>
        <h3>Backend Solutions</h3>
        <p>APIs robustas, integrações e sistemas escaláveis para dar suporte ao seu crescimento.</p>
      </div>
      <div style={cardStyle}>
        <i className="fas fa-cloud" style={iconStyle}></i>
        <h3>Cloud & DevOps</h3>
        <p>Infraestrutura em nuvem, deploy automatizado e monitoramento para máxima disponibilidade.</p>
      </div>
    </div>
    <h2 style={subtitleStyle}>Como trabalhamos</h2>
    <ul style={listStyle}>
      <li><b>Diagnóstico personalizado:</b> entendemos a fundo o seu desafio.</li>
      <li><b>Prototipação ágil:</b> validamos ideias rapidamente com protótipos e MVPs.</li>
      <li><b>Transparência total:</b> você acompanha cada etapa do projeto.</li>
      <li><b>Entrega contínua:</b> melhorias e evoluções constantes, mesmo após o lançamento.</li>
    </ul>
    <p style={finalParagraphStyle}>
      Pronto para transformar seu projeto em realidade? Fale com a gente!
    </p>
  </div>
);

export default WhatWeDo; 