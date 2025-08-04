export const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
  color: '#ffffff',
  fontFamily: 'Exo 2, Arial, sans-serif',
  padding: '0',
  margin: '0',
};

export const heroSectionStyle = {
  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
  padding: '120px 20px 80px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
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
};

export const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: 700,
  marginBottom: '1rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
};

export const subtitleStyle = {
  fontSize: '1.3rem',
  color: '#cccccc',
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
};

export const servicesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

export const serviceCardStyle = {
  background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
  borderRadius: '20px',
  padding: '2.5rem',
  textAlign: 'center',
  border: '1px solid #333',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
};

export const pricingSectionStyle = {
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
};

export const pricingTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '3rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export const toggleContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '3rem',
  background: '#1a1a1a',
  borderRadius: '50px',
  padding: '0.5rem',
  width: 'fit-content',
  margin: '0 auto 3rem',
  border: '1px solid #333',
};

export const toggleButtonStyle = {
  padding: '0.75rem 2rem',
  border: 'none',
  background: 'transparent',
  color: '#cccccc',
  borderRadius: '25px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontSize: '1rem',
  fontWeight: 600,
};

export const toggleActiveStyle = {
  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
  color: '#000000',
  boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
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
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
};

export const pricingCardBasicStyle = {
  ...pricingCardStyle,
  border: '1px solid #444',
};

export const pricingCardProStyle = {
  ...pricingCardStyle,
  border: '2px solid #FFD700',
  boxShadow: '0 15px 40px rgba(255, 215, 0, 0.2)',
  transform: 'scale(1.05)',
  paddingTop: '4rem',
};

export const pricingCardPremiumStyle = {
  ...pricingCardStyle,
  border: '2px solid #FF6B35',
  boxShadow: '0 15px 40px rgba(255, 107, 53, 0.2)',
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
};

export const popularBadgeStyle = {
  position: 'absolute',
  top: '15px',
  left: '50%',
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
};

export const priceStyle = {
  marginBottom: '2rem',
  textAlign: 'center',
};

export const priceAmountStyle = {
  fontSize: '3rem',
  fontWeight: 700,
  color: '#FFD700',
  textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
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
};

export const featureIconStyle = {
  color: '#00FF88',
  marginRight: '1rem',
  fontSize: '1.2rem',
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
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  overflow: 'hidden',
};

export const ctaButtonHoverStyle = {
  background: 'linear-gradient(45deg, #FFA500, #FFD700)',
  boxShadow: '0 0 25px rgba(255, 215, 0, 0.5)',
  transform: 'translateY(-3px)',
  textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};



// Adicionando animações CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes glow {
    0% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
    100% { text-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.3); }
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
`;

if (!document.getElementById('services-styles')) {
  style.id = 'services-styles';
  document.head.appendChild(style);
} 