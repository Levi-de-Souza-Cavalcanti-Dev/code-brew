import React from 'react';
import './Body.css';
import gearImage from './imagens/engrenagem-removebg-preview.png';

const Body = () => {
  return (
    <div className="body-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transformando Ideias em Código</h1>
          <p>Desenvolvimento de software com excelência e inovação</p>
          <button className="cta-button">Comece seu Projeto</button>
        </div>
      </section>

      <section className="services-section">
        <div className="gear-background">
          <img src={gearImage} alt="Engrenagem" className="gear-image gear-image-1" />
          <img src={gearImage} alt="Engrenagem" className="gear-image gear-image-2" />
          <img src={gearImage} alt="Engrenagem" className="gear-image gear-image-3" />
        </div>
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-code"></i>
            <h3>Desenvolvimento Web</h3>
            <p>Criamos aplicações web modernas e responsivas</p>
          </div>
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h3>Automações</h3>
            <p>Automatizamos processos para aumentar sua eficiência e produtividade da sua empresa</p>
          </div>
          <div className="service-card">
            <i className="fas fa-server"></i>
            <h3>Backend Solutions</h3>
            <p>APIs robustas e sistemas escaláveis</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Sobre Nós</h2>
          <p>Somos uma equipe apaixonada por tecnologia e inovação, 
             dedicada a entregar soluções de software de alta qualidade 
             que impulsionam o sucesso dos nossos clientes.</p>
        </div>
      </section>
    </div>
  );
};

export default Body; 