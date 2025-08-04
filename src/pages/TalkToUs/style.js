export const cardStyle = {
  maxWidth: 400,
  margin: '40px auto',
  padding: 32,
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(43,111,123,0.13)',
  color: '#222',
  fontFamily: 'Exo 2, Arial, sans-serif',
  position: 'relative',
};

export const titleStyle = {
  color: '#2b6f7b',
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: 18,
  textAlign: 'center',
  letterSpacing: 1,
};

export const inputGroup = {
  display: 'flex',
  alignItems: 'center',
  background: '#f4f7fa',
  borderRadius: 8,
  marginBottom: 18,
  border: '2px solid #f4f7fa',
  transition: 'border 0.2s',
};

export const inputIcon = {
  color: '#2b6f7b',
  fontSize: 20,
  margin: '0 12px',
};

export const inputStyle = {
  border: 'none',
  outline: 'none',
  background: 'transparent',
  padding: '14px 0',
  fontSize: 16,
  flex: 1,
  color: '#222',
};

export const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
  minHeight: 80,
};

export const buttonStyle = {
  width: '100%',
  padding: '12px 0',
  borderRadius: 8,
  border: 'none',
  background: 'linear-gradient(90deg, #2b6f7b 60%, #e3a72f 100%)',
  color: '#fff',
  fontWeight: 700,
  fontSize: 17,
  cursor: 'pointer',
  marginTop: 8,
  boxShadow: '0 2px 8px rgba(43,111,123,0.07)',
  transition: 'background 0.2s, transform 0.2s',
};

export const statusStyle = (success) => ({
  marginTop: 18,
  color: success ? '#2b6f7b' : '#e74c3c',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 600,
  justifyContent: 'center',
});

export const buttonHoverStyle = {
  background: 'linear-gradient(90deg, #21505c 60%, #b8861b 100%)',
  transform: 'translateY(-2px) scale(1.03)',
};

// CSS para animação de rotação
export const rotatingStyle = {
  animation: 'spin 12s linear infinite',
}; 