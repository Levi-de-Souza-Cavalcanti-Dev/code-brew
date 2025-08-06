import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaRocket, FaCrown, FaCheck, FaStar, FaCloud } from 'react-icons/fa';
import { GiCrownCoin } from 'react-icons/gi';
import { MdOutlineSecurity, MdSpeed, MdSupport } from 'react-icons/md';
import { BiBarChartAlt2, BiTrendingUp } from 'react-icons/bi';
import {
  containerStyle,
  premiumBackgroundStyle,
  particlesStyle,
  particleStyle,
  heroSectionStyle,
  titleStyle,
  subtitleStyle,
  servicesGridStyle,
  serviceCardStyle,
  pricingSectionStyle,
  pricingTitleStyle,
  pricingGridStyle,
  pricingCardPremiumStyle,
  pricingCardBasicStyle,
  pricingCardProStyle,
  priceStyle,
  priceAmountStyle,
  pricePeriodStyle,
  featuresListStyle,
  featureItemStyle,
  ctaButtonStyle,
  badgeStyle,
  popularBadgeStyle,
  toggleContainerStyle,
  toggleButtonStyle,
  toggleActiveStyle,
  featureIconStyle,
  gradientTextStyle,
  neonGlowStyle,
  premiumSectionStyle
} from './style';

const Services = () => {
  const [billingPeriod, setBillingPeriod] = useState('yearly'); // 'yearly' or 'monthly'
  const [particles, setParticles] = useState([]);

  // Gerar partículas animadas
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 6,
          duration: Math.random() * 4 + 4
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const pricingData = {
    yearly: {
      basic: { price: 300, period: '1 ano' },
      pro: { price: 600, period: '1 ano' },
      advanced: { price: 1500, period: '1 ano' },
      dashboard: {
        basic: { price: 400, period: '1 ano' },
        pro: { price: 800, period: '1 ano' },
        advanced: { price: 1800, period: '1 ano' }
      },
      saas: {
        basic: { price: 500, period: '1 ano' },
        pro: { price: 1000, period: '1 ano' },
        advanced: { price: 2500, period: '1 ano' }
      }
    },
    monthly: {
      basic: { price: 600, period: '6 meses' },
      pro: { price: 1500, period: '6 meses' },
      advanced: { price: 2000, period: '6 meses' },
      dashboard: {
        basic: { price: 800, period: '6 meses' },
        pro: { price: 1600, period: '6 meses' },
        advanced: { price: 3600, period: '6 meses' }
      },
      saas: {
        basic: { price: 1000, period: '6 meses' },
        pro: { price: 2000, period: '6 meses' },
        advanced: { price: 5000, period: '6 meses' }
      }
    }
  };

  const features = {
    basic: [
      'Design responsivo',
      'Até 50 produtos',
      'Pagamento online',
      'Suporte por email',
      'Relatórios básicos'
    ],
    pro: [
      'Tudo do Basic',
      'Até 200 produtos',
      'Múltiplas formas de pagamento',
      'Suporte prioritário',
      'Relatórios avançados',
      'Integração com redes sociais'
    ],
    advanced: [
      'Tudo do Pro',
      'Produtos ilimitados',
      'Sistema de afiliados',
      'Suporte 24/7',
      'Analytics completo',
      'Integração com ERP',
      'Personalização total'
    ],
    dashboard: {
      basic: [
        'Até 5 dashboards',
        '10 métricas básicas',
        'Exportação em PDF',
        'Atualização diária',
        'Suporte por email'
      ],
      pro: [
        'Tudo do Basic',
        'Até 15 dashboards',
        '50+ métricas avançadas',
        'Exportação em múltiplos formatos',
        'Atualização em tempo real',
        'Integração com APIs',
        'Suporte prioritário'
      ],
      advanced: [
        'Tudo do Pro',
        'Dashboards ilimitados',
        'Métricas personalizadas',
        'Alertas automáticos',
        'Integração com BI tools',
        'Suporte 24/7',
        'Consultoria especializada'
      ]
    },
    saas: {
      basic: [
        'Até 100 usuários',
        '5 módulos básicos',
        'Backup automático',
        'Suporte por email',
        'Atualizações mensais'
      ],
      pro: [
        'Tudo do Basic',
        'Até 500 usuários',
        '15 módulos avançados',
        'Integração com APIs',
        'Suporte prioritário',
        'Atualizações semanais',
        'Customização básica'
      ],
      advanced: [
        'Tudo do Pro',
        'Usuários ilimitados',
        'Módulos personalizados',
        'Infraestrutura dedicada',
        'Suporte 24/7',
        'Atualizações contínuas',
        'Desenvolvimento sob medida'
      ]
    }
  };

  return (
    <div style={containerStyle}>
      {/* Banner de Background Premium */}
      <div style={premiumBackgroundStyle}></div>
      
      {/* Partículas Animadas */}
      <div style={particlesStyle}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              ...particleStyle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={gradientTextStyle}>
          <h1 style={titleStyle}>
            <span style={neonGlowStyle}>Nossos Serviços</span>
          </h1>
          <p style={subtitleStyle}>
            Transformamos ideias em experiências digitais excepcionais
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={servicesGridStyle}>
        <div style={serviceCardStyle}>
          <FaShoppingCart style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }} />
          <h3>E-commerce</h3>
          <p>Lojas virtuais completas e otimizadas para conversão</p>
        </div>
        <div style={serviceCardStyle}>
          <FaRocket style={{ fontSize: '3rem', color: '#00FF88', marginBottom: '1rem' }} />
          <h3>Aplicações Web</h3>
          <p>Sistemas web modernos e escaláveis</p>
        </div>
        <div style={serviceCardStyle}>
          <FaCrown style={{ fontSize: '3rem', color: '#FF6B35', marginBottom: '1rem' }} />
          <h3>Automações</h3>
          <p>Processos automatizados para máxima eficiência</p>
        </div>
        <div style={serviceCardStyle}>
          <BiBarChartAlt2 style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }} />
          <h3>Dashboards</h3>
          <p>Painéis de controle inteligentes para análise de dados</p>
        </div>
        <div style={serviceCardStyle}>
          <FaCloud style={{ fontSize: '3rem', color: '#00FF88', marginBottom: '1rem' }} />
          <h3>SaaS</h3>
          <p>Software como serviço escalável e personalizado</p>
        </div>
        <div style={serviceCardStyle}>
          <BiTrendingUp style={{ fontSize: '3rem', color: '#FF6B35', marginBottom: '1rem' }} />
          <h3>Analytics</h3>
          <p>Análise avançada de dados e métricas de performance</p>
        </div>
      </section>

      {/* E-commerce Pricing Section */}
      <section style={pricingSectionStyle}>
        <h2 style={pricingTitleStyle}>
          <span style={neonGlowStyle}>Criação de E-commerce</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          Transforme sua loja física em uma máquina de vendas 24/7! 
          Nossas soluções de e-commerce são otimizadas para converter visitantes em clientes e maximizar seu faturamento online.
        </p>
        
        {/* Billing Toggle */}
        <div style={toggleContainerStyle}>
          <button
            style={{
              ...toggleButtonStyle,
              ...(billingPeriod === 'yearly' ? toggleActiveStyle : {})
            }}
            onClick={() => setBillingPeriod('yearly')}
          >
            Anual
          </button>
          <button
            style={{
              ...toggleButtonStyle,
              ...(billingPeriod === 'monthly' ? toggleActiveStyle : {})
            }}
            onClick={() => setBillingPeriod('monthly')}
          >
            Semestral
          </button>
        </div>

        <div style={pricingGridStyle}>
          {/* Basic Plan */}
          <div style={pricingCardBasicStyle}>
            <div style={badgeStyle}>Basic</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].basic.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].basic.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.basic.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div style={pricingCardProStyle}>
            <div style={popularBadgeStyle}>
              <FaStar style={{ marginRight: '0.5rem' }} />
              Mais Popular
            </div>
            <div style={badgeStyle}>Pro</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].pro.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].pro.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.pro.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Pro
            </button>
          </div>

          {/* Advanced Plan */}
          <div style={pricingCardPremiumStyle}>
            <div style={badgeStyle}>
              <GiCrownCoin style={{ marginRight: '0.5rem' }} />
              Premium
            </div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].advanced.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].advanced.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.advanced.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Advanced
            </button>
          </div>
        </div>
      </section>

      {/* Automações Pricing Section */}
      <section style={pricingSectionStyle}>
        <h2 style={pricingTitleStyle}>
          <span style={neonGlowStyle}>Automações Inteligentes</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          Deseja ganhar produtividade e ter mais lucro na sua empresa? 
          Então busque uma automação de uma tarefa repetitiva que um robô poderia fazer. 
          Libere sua equipe para focar no que realmente importa!
        </p>
        
        <div style={pricingGridStyle}>
          {/* Automação Basic Plan */}
          <div style={pricingCardBasicStyle}>
            <div style={badgeStyle}>Starter</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ 250</span>
              <span style={pricePeriodStyle}>/mês</span>
            </div>
            <ul style={featuresListStyle}>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Até 3 automações básicas
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Integração com WhatsApp
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Relatórios semanais
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Suporte por email
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Setup inicial incluído
              </li>
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Começar Agora
            </button>
          </div>

          {/* Automação Pro Plan */}
          <div style={pricingCardProStyle}>
            <div style={popularBadgeStyle}>
              <FaStar style={{ marginRight: '0.5rem' }} />
              Mais Popular
            </div>
            <div style={badgeStyle}>Business</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ 500</span>
              <span style={pricePeriodStyle}>/mês</span>
            </div>
            <ul style={featuresListStyle}>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Até 10 automações avançadas
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Integração multi-canal
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Analytics em tempo real
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Suporte prioritário
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Personalização completa
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Backup automático
              </li>
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Business
            </button>
          </div>

          {/* Automação Advanced Plan */}
          <div style={pricingCardPremiumStyle}>
            <div style={badgeStyle}>
              <GiCrownCoin style={{ marginRight: '0.5rem' }} />
              Enterprise
            </div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ 1.200</span>
              <span style={pricePeriodStyle}>/mês</span>
            </div>
            <ul style={featuresListStyle}>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Automações ilimitadas
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                IA personalizada
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Suporte 24/7 dedicado
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Infraestrutura dedicada
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                Consultoria especializada
              </li>
              <li style={featureItemStyle}>
                <FaCheck style={featureIconStyle} />
                SLA garantido
              </li>
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Enterprise
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Pricing Section */}
      <section style={pricingSectionStyle}>
        <h2 style={pricingTitleStyle}>
          <span style={neonGlowStyle}>Dashboards Inteligentes</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          Transforme dados em decisões lucrativas! Nossos dashboards revelam insights 
          que seus concorrentes não conseguem ver. Tome decisões baseadas em dados reais 
          e acelere o crescimento do seu negócio.
        </p>
        
        <div style={pricingGridStyle}>
          {/* Dashboard Basic Plan */}
          <div style={pricingCardBasicStyle}>
            <div style={badgeStyle}>Basic</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].dashboard.basic.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].dashboard.basic.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.dashboard.basic.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Basic
            </button>
          </div>

          {/* Dashboard Pro Plan */}
          <div style={pricingCardProStyle}>
            <div style={popularBadgeStyle}>
              <FaStar style={{ marginRight: '0.5rem' }} />
              Mais Popular
            </div>
            <div style={badgeStyle}>Pro</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].dashboard.pro.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].dashboard.pro.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.dashboard.pro.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Pro
            </button>
          </div>

          {/* Dashboard Advanced Plan */}
          <div style={pricingCardPremiumStyle}>
            <div style={badgeStyle}>
              <GiCrownCoin style={{ marginRight: '0.5rem' }} />
              Premium
            </div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].dashboard.advanced.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].dashboard.advanced.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.dashboard.advanced.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Advanced
            </button>
          </div>
        </div>
      </section>

      {/* SaaS Pricing Section */}
      <section style={pricingSectionStyle}>
        <h2 style={pricingTitleStyle}>
          <span style={neonGlowStyle}>SaaS Escalável</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          Crie sua própria startup de software! Desenvolvemos SaaS que cresce junto com seu negócio. 
          De MVP a plataforma global, construímos a base tecnológica que vai revolucionar seu mercado 
          e gerar receita recorrente.
        </p>
        
        <div style={pricingGridStyle}>
          {/* SaaS Basic Plan */}
          <div style={pricingCardBasicStyle}>
            <div style={badgeStyle}>MVP</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].saas.basic.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].saas.basic.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.saas.basic.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher MVP
            </button>
          </div>

          {/* SaaS Pro Plan */}
          <div style={pricingCardProStyle}>
            <div style={popularBadgeStyle}>
              <FaStar style={{ marginRight: '0.5rem' }} />
              Mais Popular
            </div>
            <div style={badgeStyle}>Scale</div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].saas.pro.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].saas.pro.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.saas.pro.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Scale
            </button>
          </div>

          {/* SaaS Advanced Plan */}
          <div style={pricingCardPremiumStyle}>
            <div style={badgeStyle}>
              <GiCrownCoin style={{ marginRight: '0.5rem' }} />
              Enterprise
            </div>
            <div style={priceStyle}>
              <span style={priceAmountStyle}>R$ {pricingData[billingPeriod].saas.advanced.price}</span>
              <span style={pricePeriodStyle}>/{pricingData[billingPeriod].saas.advanced.period}</span>
            </div>
            <ul style={featuresListStyle}>
              {features.saas.advanced.map((feature, index) => (
                <li key={index} style={featureItemStyle}>
                  <FaCheck style={featureIconStyle} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
                e.target.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.textShadow = 'none';
              }}
            >
              Escolher Enterprise
            </button>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section style={premiumSectionStyle}>
        <h2 style={{
          ...pricingTitleStyle,
          fontSize: '2rem',
          marginBottom: '1rem'
        }}>
          <span style={neonGlowStyle}>Não achou o que precisava?</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          Entre em contato e faça seu orçamento personalizado. 
          Nossa equipe está pronta para transformar sua ideia em realidade!
        </p>
        <button 
          style={{
            ...ctaButtonStyle,
            fontSize: '1.3rem',
            padding: '1.5rem 3rem',
            background: 'linear-gradient(45deg, #FF6B35, #FF8C42)',
            boxShadow: '0 0 25px rgba(255, 107, 53, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(45deg, #FF8C42, #FF6B35)';
            e.target.style.boxShadow = '0 0 35px rgba(255, 107, 53, 0.5)';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(45deg, #FF6B35, #FF8C42)';
            e.target.style.boxShadow = '0 0 25px rgba(255, 107, 53, 0.3)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Solicitar Orçamento Personalizado
        </button>
      </section>

      {/* Additional Services */}
      <section style={{ ...servicesGridStyle, marginTop: '4rem' }}>
        <div style={serviceCardStyle}>
          <MdOutlineSecurity style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }} />
          <h3>Segurança</h3>
          <p>Proteção completa para seus dados e transações</p>
        </div>
        <div style={serviceCardStyle}>
          <MdSpeed style={{ fontSize: '3rem', color: '#00FF88', marginBottom: '1rem' }} />
          <h3>Performance</h3>
          <p>Otimização para velocidade máxima de carregamento</p>
        </div>
        <div style={serviceCardStyle}>
          <MdSupport style={{ fontSize: '3rem', color: '#FF6B35', marginBottom: '1rem' }} />
          <h3>Suporte</h3>
          <p>Assistência técnica especializada 24/7</p>
        </div>
      </section>
    </div>
  );
};

export default Services; 