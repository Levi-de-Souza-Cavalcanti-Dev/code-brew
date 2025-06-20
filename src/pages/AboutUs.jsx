import React from 'react';

const aboutSectionStyle = {
  maxWidth: 800,
  margin: '40px auto',
  padding: 32,
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(81,43,212,0.07)',
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
  color: '#222',
  fontSize: '1.3rem',
  fontWeight: 600,
  margin: '32px 0 12px 0',
};

const highlightStyle = {
  color: '#2b6f7b',
  fontWeight: 700,
};

const AboutUs = () => (
  <div style={aboutSectionStyle}>
    <h1 style={titleStyle}>Sobre a <span style={highlightStyle}>Code Brew</span></h1>
    <p style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
      Somos apaixonados por <span style={highlightStyle}>tecnologia</span> e por transformar ideias em soluções digitais inovadoras. Na Code Brew, acreditamos que cada projeto é uma oportunidade de criar algo único, impactante e que gere valor real para pessoas e empresas.
    </p>
    <h2 style={subtitleStyle}>Nossa Missão</h2>
    <p>
      <span style={highlightStyle}>Descomplicar o desenvolvimento de software</span> e entregar produtos digitais de alta qualidade, combinando criatividade, tecnologia de ponta e proximidade com o cliente.
    </p>
    <h2 style={subtitleStyle}>Nossos Valores</h2>
    <ul style={{ marginLeft: 24, fontSize: '1.05rem', lineHeight: 1.6 }}>
      <li><b>Inovação:</b> buscamos sempre novas soluções e tendências.</li>
      <li><b>Transparência:</b> comunicação clara e parceria verdadeira com nossos clientes.</li>
      <li><b>Excelência:</b> atenção aos detalhes em cada linha de código.</li>
      <li><b>Colaboração:</b> valorizamos o trabalho em equipe e a troca de ideias.</li>
    </ul>
    <h2 style={subtitleStyle}>Nosso Time</h2>
    <p>
      Uma equipe multidisciplinar formada por desenvolvedores, designers e especialistas em tecnologia, todos <span style={highlightStyle}>unidos pelo propósito de criar experiências digitais memoráveis</span>.
    </p>
    <h3 style={{ color: '#2b6f7b', fontWeight: 700, marginBottom: 18, marginTop: 18, fontSize: '1.25rem', textAlign: 'center', letterSpacing: 0.5 }}>Fundadores da Code Brew</h3>
    <div style={{ display: 'flex', gap: 32, margin: '32px 0', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Dev" style={{ width: 90, borderRadius: '50%', marginBottom: 8, border: '3px solid #2b6f7b' }} />
        <div style={{ fontWeight: 600 }}>Levi Souza</div>
        <div style={{ color: '#888', fontSize: 14 }}>Full Stack Developer</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dev" style={{ width: 90, borderRadius: '50%', marginBottom: 8, border: '3px solid #2b6f7b' }} />
        <div style={{ fontWeight: 600 }}>Jordan Faustino</div>
        <div style={{ color: '#888', fontSize: 14 }}>Full Stack Developer</div>
      </div>
    </div>
    <h2 style={subtitleStyle}>Por que escolher a <span style={highlightStyle}>Code Brew</span>?</h2>
    <ul style={{ marginLeft: 24, fontSize: '1.05rem', lineHeight: 1.6 }}>
      <li>Atendimento próximo e personalizado.</li>
      <li>Projetos sob medida para cada cliente.</li>
      <li>Utilização das melhores stacks e práticas do mercado.</li>
      <li>Entrega ágil, transparente e com qualidade garantida.</li>
    </ul>
    <p style={{ marginTop: 32, fontWeight: 600, color: '#2b6f7b', fontSize: '1.2rem' }}>
      Vamos juntos transformar sua ideia em realidade digital!
    </p>
  </div>
);

export default AboutUs; 