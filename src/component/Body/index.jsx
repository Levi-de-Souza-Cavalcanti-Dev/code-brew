import React, { useEffect, useState } from 'react';
import './style.css';
import gearImage from '../imagens/engrenagem-removebg-preview.png';
import { SiDotnet } from 'react-icons/si';

const Body = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        // Verificar se há notícias em cache
        const cachedNoticias = localStorage.getItem('noticias_cache');
        const cacheTimestamp = localStorage.getItem('noticias_timestamp');
        const currentTime = Date.now();
        const cacheExpiry = 30 * 60 * 1000; // 30 minutos

        // Se há cache válido, usar ele
        if (cachedNoticias && cacheTimestamp && (currentTime - parseInt(cacheTimestamp)) < cacheExpiry) {
          console.log('Usando notícias do cache');
          setNoticias(JSON.parse(cachedNoticias));
          setLoading(false);
          return;
        }

        // Se não há cache válido, buscar da API
        console.log('Buscando notícias da API');
        const response = await fetch('https://code-brew.onrender.com/noticias/');
        const data = await response.json();
        
        // Salvar no cache
        localStorage.setItem('noticias_cache', JSON.stringify(data));
        localStorage.setItem('noticias_timestamp', currentTime.toString());
        
        setNoticias(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        setNoticias([]);
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  // Função para limpar cache (opcional, para debug)
  const clearCache = () => {
    localStorage.removeItem('noticias_cache');
    localStorage.removeItem('noticias_timestamp');
    console.log('Cache limpo');
  };

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

      <section className="stacks-section">
        <h2>Stacks que Utilizamos</h2>
        <div className="stacks-grid">
          <div className="stack-card"><i className="fab fa-python stack-icon" title="Python"></i> Python</div>
          <div className="stack-card"><i className="fab fa-java stack-icon" title="Java"></i> Java</div>
          <div className="stack-card"><i className="fab fa-js-square stack-icon" title="JavaScript"></i> JavaScript</div>
          <div className="stack-card"><i className="fab fa-react stack-icon" title="React"></i> React</div>
          <div className="stack-card"><i className="fab fa-angular stack-icon" title="Angular"></i> Angular</div>
          <div className="stack-card"><i className="fab fa-node-js stack-icon" title="Node.js" style={{ color: '#3C873A' }}></i> Node.js</div>
          <div className="stack-card"><i className="fab fa-aws stack-icon" title="AWS"></i> AWS</div>
          <div className="stack-card"><i className="fas fa-database stack-icon" title="MySQL"></i> MySQL</div>
          <div className="stack-card"><i className="fas fa-database stack-icon" title="NoSQL"></i> NoSQL</div>
          <div className="stack-card"><SiDotnet className="stack-icon" title=".NET" style={{ color: '#512BD4' }} />C#</div>
        </div>
      </section>
      
      <section className="news-section">
        <h2>Notícias de Tecnologia</h2>
        <div className="news-list">
          {loading && <p>Carregando notícias...</p>}
          {!loading && noticias.length === 0 && <p>Nenhuma notícia disponível no momento.</p>}
          {noticias.map((noticia, idx) => (
            <a key={idx} href={noticia.url} target="_blank" rel="noopener noreferrer" className="news-card">
              {noticia.urlToImage && <img src={noticia.urlToImage} alt={noticia.title} className="news-img" />}
              <div>
                <h3>{noticia.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>
                  {noticia.resumoGPT || noticia.description}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>{noticia.source?.name}</span>
              </div>
            </a>
          ))}
        </div>
        {/* Botão para limpar cache (remover em produção) */}
        {process.env.NODE_ENV === 'development' && (
          <button 
            onClick={clearCache} 
            style={{ 
              marginTop: '10px', 
              padding: '5px 10px', 
              fontSize: '12px',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Limpar Cache (Dev)
          </button>
        )}
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