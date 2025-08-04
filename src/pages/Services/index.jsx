import React, { useState } from 'react';
import { FaShoppingCart, FaRocket, FaCrown, FaCheck, FaStar } from 'react-icons/fa';
import { GiCrownCoin } from 'react-icons/gi';
import { MdOutlineSecurity, MdSpeed, MdSupport } from 'react-icons/md';
import {
  containerStyle,
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
  neonGlowStyle
} from './style';

const Services = () => {
  const [billingPeriod, setBillingPeriod] = useState('yearly'); // 'yearly' or 'monthly'

  const pricingData = {
    yearly: {
      basic: { price: 300, period: '1 ano' },
      pro: { price: 600, period: '1 ano' },
      advanced: { price: 1500, period: '1 ano' }
    },
    monthly: {
      basic: { price: 600, period: '6 meses' },
      pro: { price: 1500, period: '6 meses' },
      advanced: { price: 2000, period: '6 meses' }
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
    ]
  };

  return (
    <div style={containerStyle}>
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
      </section>

      {/* E-commerce Pricing Section */}
      <section style={pricingSectionStyle}>
        <h2 style={pricingTitleStyle}>
          <span style={neonGlowStyle}>Criação de E-commerce</span>
        </h2>
        
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