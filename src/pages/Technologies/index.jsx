import React from 'react';
import {
  sectionStyle,
  titleStyle,
  gridStyle,
  techCard,
  iconStyle,
  techNameStyle,
  techDescriptionStyle,
  paragraphStyle,
  finalParagraphStyle
} from './style';

const Technologies = () => (
  <div style={sectionStyle}>
    <h1 style={titleStyle}>Tecnologias que usamos</h1>
    <p style={paragraphStyle}>
      Utilizamos as stacks e ferramentas mais modernas do mercado para garantir performance, segurança e inovação em cada projeto.
    </p>
    <div style={gridStyle}>
      <div style={techCard}>
        <i className="fab fa-python" style={{ ...iconStyle, color: '#3776AB' }}></i>
        <div style={techNameStyle}>Python</div>
        <div style={techDescriptionStyle}>Automação, APIs e Data Science</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-java" style={{ ...iconStyle, color: '#007396' }}></i>
        <div style={techNameStyle}>Java</div>
        <div style={techDescriptionStyle}>Soluções robustas e escaláveis</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-js-square" style={{ ...iconStyle, color: '#F7DF1E' }}></i>
        <div style={techNameStyle}>JavaScript</div>
        <div style={techDescriptionStyle}>Web, integrações e interatividade</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-react" style={{ ...iconStyle, color: '#61DAFB' }}></i>
        <div style={techNameStyle}>React</div>
        <div style={techDescriptionStyle}>Front-end moderno e dinâmico</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-angular" style={{ ...iconStyle, color: '#DD0031' }}></i>
        <div style={techNameStyle}>Angular</div>
        <div style={techDescriptionStyle}>Aplicações web escaláveis</div>
      </div>
      <div style={techCard}>
        <i className="fab fa-aws" style={{ ...iconStyle, color: '#FF9900' }}></i>
        <div style={techNameStyle}>AWS</div>
        <div style={techDescriptionStyle}>Infraestrutura em nuvem</div>
      </div>
      <div style={techCard}>
        <i className="fas fa-database" style={{ ...iconStyle, color: '#4DB33D' }}></i>
        <div style={techNameStyle}>MySQL</div>
        <div style={techDescriptionStyle}>Banco de dados relacional</div>
      </div>
      <div style={techCard}>
        <i className="fas fa-database" style={{ ...iconStyle, color: '#8e44ad' }}></i>
        <div style={techNameStyle}>NoSQL</div>
        <div style={techDescriptionStyle}>MongoDB, DynamoDB e outros</div>
      </div>
      <div style={techCard}>
        <i className="fas fa-code" style={{ ...iconStyle, color: '#512BD4' }}></i>
        <div style={techNameStyle}>.NET / C#</div>
        <div style={techDescriptionStyle}>Sistemas corporativos e APIs</div>
      </div>
    </div>
    <p style={finalParagraphStyle}>
      Estamos sempre atentos às tendências para entregar o melhor em tecnologia!
    </p>
  </div>
);

export default Technologies; 