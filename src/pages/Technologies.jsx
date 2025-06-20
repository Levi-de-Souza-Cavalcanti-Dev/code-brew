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

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 28,
  justifyContent: 'center',
  margin: '32px 0',
};

const techCard = {
  background: '#f4f7fa',
  borderRadius: 10,
  boxShadow: '0 2px 8px rgba(43,111,123,0.07)',
  padding: '28px 24px',
  width: 200,
  minHeight: 170,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const iconStyle = {
  fontSize: 38,
  marginBottom: 12,
};

const Technologies = () => (
  <div style={sectionStyle}>
    <h1 style={titleStyle}>Tecnologias que usamos</h1>
    <p style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
      Utilizamos as stacks e ferramentas mais modernas do mercado para garantir performance, segurança e inovação em cada projeto.
    </p>
    <div style={gridStyle}>
      <div style={techCard}>
        <i className="fab fa-python" style={{ ...iconStyle, color: '#3776AB' }}></i>
        <div style={{ fontWeight: 600 }}>Python</div>
        <div style={{ color: '#555', fontSize: 14 }}>Automação, APIs e Data Science</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-java" style={{ ...iconStyle, color: '#007396' }}></i>
        <div style={{ fontWeight: 600 }}>Java</div>
        <div style={{ color: '#555', fontSize: 14 }}>Soluções robustas e escaláveis</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-js-square" style={{ ...iconStyle, color: '#F7DF1E' }}></i>
        <div style={{ fontWeight: 600 }}>JavaScript</div>
        <div style={{ color: '#555', fontSize: 14 }}>Web, integrações e interatividade</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-react" style={{ ...iconStyle, color: '#61DAFB' }}></i>
        <div style={{ fontWeight: 600 }}>React</div>
        <div style={{ color: '#555', fontSize: 14 }}>Front-end moderno e dinâmico</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-angular" style={{ ...iconStyle, color: '#DD0031' }}></i>
        <div style={{ fontWeight: 600 }}>Angular</div>
        <div style={{ color: '#555', fontSize: 14 }}>Aplicações web escaláveis</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-aws" style={{ ...iconStyle, color: '#FF9900' }}></i>
        <div style={{ fontWeight: 600 }}>AWS</div>
        <div style={{ color: '#555', fontSize: 14 }}>Infraestrutura em nuvem</div>
      </div>
      <div style={techCard}>
        <i className="fas fa-database" style={{ ...iconStyle, color: '#4DB33D' }}></i>
        <div style={{ fontWeight: 600 }}>MySQL</div>
        <div style={{ color: '#555', fontSize: 14 }}>Banco de dados relacional</div>
      </div>
      <div style={techCard}>
        <i className="fas fa-database" style={{ ...iconStyle, color: '#8e44ad' }}></i>
        <div style={{ fontWeight: 600 }}>NoSQL</div>
        <div style={{ color: '#555', fontSize: 14 }}>MongoDB, DynamoDB e outros</div>
      </div>
      <div style={techCard}>
        <i className="fas fa-code" style={{ ...iconStyle, color: '#512BD4' }}></i>
        <div style={{ fontWeight: 600 }}>.NET / C#</div>
        <div style={{ color: '#555', fontSize: 14 }}>Sistemas corporativos e APIs</div>
      </div>
    </div>
    <p style={{ marginTop: 32, fontWeight: 600, color: '#2b6f7b', fontSize: '1.2rem' }}>
      Estamos sempre atentos às tendências para entregar o melhor em tecnologia!
    </p>
  </div>
);

export default Technologies; 