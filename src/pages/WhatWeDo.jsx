import React from 'react';

const sectionStyle = {
  maxWidth: 900,
  margin: '40px auto',
  padding: 32,
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(43,111,123,0.07)',
  color: '#222',
  fontFamily: 'Exo 2, Arial, sans-serif',
};

const titleStyle = {
  color: '#2b6f7b',
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: 16,
  letterSpacing: 1,
};

const subtitleStyle = {
  color: '#2b6f7b',
  fontSize: '1.3rem',
  fontWeight: 600,
  margin: '32px 0 12px 0',
};

const cardGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 28,
  justifyContent: 'center',
  margin: '32px 0',
};

const cardStyle = {
  background: '#f4f7fa',
  borderRadius: 10,
  boxShadow: '0 2px 8px rgba(43,111,123,0.07)',
  padding: '28px 24px',
  width: 260,
  minHeight: 210,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const iconStyle = {
  fontSize: 38,
  color: '#2b6f7b',
  marginBottom: 12,
};

const WhatWeDo = () => (
  <div style={sectionStyle}>
    <h1 style={titleStyle}>O que fazemos</h1>
    <p style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
      Na <span style={{ color: '#2b6f7b', fontWeight: 700 }}>Code Brew</span>, desenvolvemos soluções digitais sob medida para transformar negócios e ideias em experiências inovadoras.
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
    <ul style={{ marginLeft: 24, fontSize: '1.05rem', lineHeight: 1.6 }}>
      <li><b>Diagnóstico personalizado:</b> entendemos a fundo o seu desafio.</li>
      <li><b>Prototipação ágil:</b> validamos ideias rapidamente com protótipos e MVPs.</li>
      <li><b>Transparência total:</b> você acompanha cada etapa do projeto.</li>
      <li><b>Entrega contínua:</b> melhorias e evoluções constantes, mesmo após o lançamento.</li>
    </ul>
    <p style={{ marginTop: 32, fontWeight: 600, color: '#2b6f7b', fontSize: '1.2rem' }}>
      Pronto para transformar seu projeto em realidade? Fale com a gente!
    </p>
  </div>
);

export default WhatWeDo; 