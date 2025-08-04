import React from 'react';
import {
  aboutSectionStyle,
  titleStyle,
  subtitleStyle,
  highlightStyle,
  foundersTitleStyle,
  teamContainerStyle,
  memberCardStyle,
  memberImageStyle,
  memberNameStyle,
  memberRoleStyle,
  paragraphStyle,
  listStyle,
  finalParagraphStyle
} from './style';

const AboutUs = () => (
  <div style={aboutSectionStyle}>
    <h1 style={titleStyle}>Sobre a <span style={highlightStyle}>Code Brew</span></h1>
    <p style={paragraphStyle}>
      Somos apaixonados por <span style={highlightStyle}>tecnologia</span> e por transformar ideias em soluções digitais inovadoras. Na Code Brew, acreditamos que cada projeto é uma oportunidade de criar algo único, impactante e que gere valor real para pessoas e empresas.
    </p>
    <h2 style={subtitleStyle}>Nossa Missão</h2>
    <p>
      <span style={highlightStyle}>Descomplicar o desenvolvimento de software</span> e entregar produtos digitais de alta qualidade, combinando criatividade, tecnologia de ponta e proximidade com o cliente.
    </p>
    <h2 style={subtitleStyle}>Nossos Valores</h2>
    <ul style={listStyle}>
      <li><b>Inovação:</b> buscamos sempre novas soluções e tendências.</li>
      <li><b>Transparência:</b> comunicação clara e parceria verdadeira com nossos clientes.</li>
      <li><b>Excelência:</b> atenção aos detalhes em cada linha de código.</li>
      <li><b>Colaboração:</b> valorizamos o trabalho em equipe e a troca de ideias.</li>
    </ul>
    <h2 style={subtitleStyle}>Nosso Time</h2>
    <p>
      Uma equipe multidisciplinar formada por desenvolvedores, designers e especialistas em tecnologia, todos <span style={highlightStyle}>unidos pelo propósito de criar experiências digitais memoráveis</span>.
    </p>
    <h3 style={foundersTitleStyle}>Fundadores da Code Brew</h3>
    <div style={teamContainerStyle}>
      <div style={memberCardStyle}>
        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Dev" style={memberImageStyle} />
        <div style={memberNameStyle}>Levi Cavalcanti</div>
        <div style={memberRoleStyle}>Full Stack Developer</div>
      </div>
      <div style={memberCardStyle}>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dev" style={memberImageStyle} />
        <div style={memberNameStyle}>Jordan Faustino</div>
        <div style={memberRoleStyle}>Full Stack Developer</div>
      </div>
    </div>
    <h2 style={subtitleStyle}>Por que escolher a <span style={highlightStyle}>Code Brew</span>?</h2>
    <ul style={listStyle}>
      <li>Atendimento próximo e personalizado.</li>
      <li>Projetos sob medida para cada cliente.</li>
      <li>Utilização das melhores stacks e práticas do mercado.</li>
      <li>Entrega ágil, transparente e com qualidade garantida.</li>
    </ul>
    <p style={finalParagraphStyle}>
      Vamos juntos transformar sua ideia em realidade digital!
    </p>
  </div>
);

export default AboutUs; 