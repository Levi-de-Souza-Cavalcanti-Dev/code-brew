export const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
  color: '#ffffff',
  fontFamily: 'Exo 2, Arial, sans-serif',
  padding: '0',
  margin: '0',
  position: 'relative',
  overflow: 'hidden',
};

// Novo: Banner de background premium com partículas
export const premiumBackgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `
    radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)
  `,
  zIndex: 1,
};

// Novo: Partículas animadas
export const particlesStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  pointerEvents: 'none',
};

export const particleStyle = {
  position: 'absolute',
  width: '2px',
  height: '2px',
  background: '#FFD700',
  borderRadius: '50%',
  animation: 'float 6s ease-in-out infinite',
  opacity: 0.6,
};

export const heroSectionStyle = {
  background: `
    linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(26, 26, 26, 0.9) 100%),
    url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  padding: '120px 20px 80px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 3,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.05) 50%, transparent 70%),
      linear-gradient(-45deg, transparent 30%, rgba(255, 107, 53, 0.03) 50%, transparent 70%)
    `,
    zIndex: -1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300FF88' fill-opacity='0.02'%3E%3Cpath d='M0 0h200v2H0V0zm0 4h200v2H0V4zm0 4h200v2H0V8zm0 4h200v2H0V12zm0 4h200v2H0V16zm0 4h200v2H0V20zm0 4h200v2H0V24zm0 4h200v2H0V28zm0 4h200v2H0V32zm0 4h200v2H0V36zm0 4h200v2H0V40zm0 4h200v2H0V44zm0 4h200v2H0V48zm0 4h200v2H0V52zm0 4h200v2H0V56zm0 4h200v2H0V60zm0 4h200v2H0V64zm0 4h200v2H0V68zm0 4h200v2H0V72zm0 4h200v2H0V76zm0 4h200v2H0V80zm0 4h200v2H0V84zm0 4h200v2H0V88zm0 4h200v2H0V92zm0 4h200v2H0V96zm0 4h200v2H0V100zm0 4h200v2H0V104zm0 4h200v2H0V108zm0 4h200v2H0V112zm0 4h200v2H0V116zm0 4h200v2H0V120zm0 4h200v2H0V124zm0 4h200v2H0V128zm0 4h200v2H0V132zm0 4h200v2H0V136zm0 4h200v2H0V140zm0 4h200v2H0V144zm0 4h200v2H0V148zm0 4h200v2H0V152zm0 4h200v2H0V156zm0 4h200v2H0V160zm0 4h200v2H0V164zm0 4h200v2H0V168zm0 4h200v2H0V172zm0 4h200v2H0V176zm0 4h200v2H0V180zm0 4h200v2H0V184zm0 4h200v2H0V188zm0 4h200v2H0V192zm0 4h200v2H0V196zm0 4h200v2H0V200z'/%3E%3C/g%3E%3C/svg%3E")
    `,
    backgroundSize: '200px 200px',
    backgroundPosition: 'center',
    opacity: 0.4,
    zIndex: -2,
  },
};

export const gradientTextStyle = {
  position: 'relative',
  zIndex: 2,
};

export const neonGlowStyle = {
  background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B35)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
  animation: 'glow 2s ease-in-out infinite alternate',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120%',
    height: '120%',
    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
    zIndex: -1,
    animation: 'pulse 3s ease-in-out infinite',
  },
};

export const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: 700,
  marginBottom: '1rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '3px',
    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    borderRadius: '2px',
  },
};

export const subtitleStyle = {
  fontSize: '1.3rem',
  color: '#cccccc',
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px',
    height: '2px',
    background: 'linear-gradient(45deg, #FF6B35, #FF8C42)',
    borderRadius: '1px',
  },
};

export const servicesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 3,
};

export const serviceCardStyle = {
  background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
  borderRadius: '20px',
  padding: '2.5rem',
  textAlign: 'center',
  border: '1px solid #333',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
  '&:hover': {
    transform: 'translateY(-15px) scale(1.02)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.2)',
    borderColor: '#FFD700',
  },
};

export const pricingSectionStyle = {
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 3,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.03) 0%, transparent 70%)',
    zIndex: -1,
  },
};

export const pricingTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '3rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    borderRadius: '2px',
  },
};

export const toggleContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '3rem',
  background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
  borderRadius: '50px',
  padding: '0.5rem',
  width: 'fit-content',
  margin: '0 auto 3rem',
  border: '1px solid #333',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), transparent)',
    borderRadius: '50px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
};

export const toggleButtonStyle = {
  padding: '0.75rem 2rem',
  border: 'none',
  background: 'transparent',
  color: '#cccccc',
  borderRadius: '25px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  fontSize: '1rem',
  fontWeight: 600,
  position: 'relative',
  zIndex: 2,
};

export const toggleActiveStyle = {
  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
  color: '#000000',
  boxShadow: '0 0 20px rgba(255, 215, 0, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)',
  transform: 'scale(1.05)',
};

export const pricingGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
};

export const pricingCardStyle = {
  background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
  borderRadius: '20px',
  padding: '2.5rem',
  border: '1px solid #333',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(255, 215, 0, 0.05) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
};

export const pricingCardBasicStyle = {
  ...pricingCardStyle,
  border: '1px solid #444',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.1)',
    borderColor: '#666',
  },
};

export const pricingCardProStyle = {
  ...pricingCardStyle,
  border: '2px solid #FFD700',
  boxShadow: '0 15px 40px rgba(255, 215, 0, 0.2)',
  transform: 'scale(1.05)',
  paddingTop: '4rem',
  '&:hover': {
    transform: 'scale(1.05) translateY(-8px)',
    boxShadow: '0 25px 50px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.2)',
  },
};

export const pricingCardPremiumStyle = {
  ...pricingCardStyle,
  border: '2px solid #FF6B35',
  boxShadow: '0 15px 40px rgba(255, 107, 53, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 50px rgba(255, 107, 53, 0.3), 0 0 30px rgba(255, 107, 53, 0.2)',
  },
};

export const badgeStyle = {
  display: 'inline-block',
  padding: '0.5rem 1.5rem',
  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
  color: '#000000',
  borderRadius: '25px',
  fontSize: '0.9rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '1.5rem',
  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.3)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent)',
    borderRadius: '25px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
};

export const popularBadgeStyle = {
  position: 'absolute',
  top: '15px',
  left: '27.5%',
  transform: 'translateX(-50%)',
  background: 'linear-gradient(45deg, #FF6B35, #FF8C42)',
  color: '#ffffff',
  padding: '0.5rem 1.5rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: '0 5px 15px rgba(255, 107, 53, 0.3)',
  zIndex: 10,
  animation: 'pulse 2s ease-in-out infinite',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  minWidth: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const priceStyle = {
  marginBottom: '2rem',
  textAlign: 'center',
  position: 'relative',
};

export const priceAmountStyle = {
  fontSize: '3rem',
  fontWeight: 700,
  color: '#FFD700',
  textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '2px',
    background: 'linear-gradient(45deg, #FFD700, transparent)',
    borderRadius: '1px',
  },
};

export const pricePeriodStyle = {
  fontSize: '1.2rem',
  color: '#cccccc',
  marginLeft: '0.5rem',
};

export const featuresListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 2rem 0',
  textAlign: 'left',
};

export const featureItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  fontSize: '1rem',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  padding: '0.5rem',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(255, 215, 0, 0.1)',
    transform: 'translateX(5px)',
  },
};

export const featureIconStyle = {
  color: '#00FF88',
  marginRight: '1rem',
  fontSize: '1.2rem',
  transition: 'all 0.3s ease',
};

export const ctaButtonStyle = {
  width: '100%',
  padding: '1rem 2rem',
  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
  color: '#000000',
  border: 'none',
  borderRadius: '10px',
  fontSize: '1.1rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: '0 10px 25px rgba(255, 215, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.2)',
  },
};

export const ctaButtonHoverStyle = {
  background: 'linear-gradient(45deg, #FFA500, #FFD700)',
  boxShadow: '0 0 25px rgba(255, 215, 0, 0.5)',
  transform: 'translateY(-3px)',
  textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};

// Novo: Estilos para elementos premium adicionais
export const premiumSectionStyle = {
  background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
  borderRadius: '20px',
  margin: '4rem auto',
  maxWidth: '800px',
  padding: '3rem 2rem',
  border: '2px solid #FFD700',
  boxShadow: '0 15px 40px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 10,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
    zIndex: -1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.05) 50%, transparent 70%)',
    zIndex: -2,
  },
};

// Adicionando animações CSS premium
const style = document.createElement('style');
style.textContent = `
  @keyframes glow {
    0% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
    100% { text-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.3); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(90deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
    75% { transform: translateY(-15px) rotate(270deg); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
    border-color: #FFD700;
  }
  
  .pricing-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.5);
  }
  
  .feature-item:hover .feature-icon {
    transform: scale(1.2);
    color: #FFD700;
  }
  
  .premium-bg {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    position: relative;
    overflow: hidden;
  }
  
  .premium-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 255, 136, 0.05) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
  }
`;

if (!document.getElementById('services-styles')) {
  style.id = 'services-styles';
  document.head.appendChild(style);
} 