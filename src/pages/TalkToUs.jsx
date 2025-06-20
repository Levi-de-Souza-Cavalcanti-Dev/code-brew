import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import gearImage from '../component/imagens/engrenagem-removebg-preview.png';

const cardStyle = {
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

const titleStyle = {
  color: '#2b6f7b',
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: 18,
  textAlign: 'center',
  letterSpacing: 1,
};

const inputGroup = {
  display: 'flex',
  alignItems: 'center',
  background: '#f4f7fa',
  borderRadius: 8,
  marginBottom: 18,
  border: '2px solid #f4f7fa',
  transition: 'border 0.2s',
};

const inputIcon = {
  color: '#2b6f7b',
  fontSize: 20,
  margin: '0 12px',
};

const inputStyle = {
  border: 'none',
  outline: 'none',
  background: 'transparent',
  padding: '14px 0',
  fontSize: 16,
  flex: 1,
  color: '#222',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
  minHeight: 80,
};

const buttonStyle = {
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

const statusStyle = (success) => ({
  marginTop: 18,
  color: success ? '#2b6f7b' : '#e74c3c',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 600,
  justifyContent: 'center',
});

const buttonHoverStyle = {
  background: 'linear-gradient(90deg, #21505c 60%, #b8861b 100%)',
  transform: 'translateY(-2px) scale(1.03)',
};

// CSS para animação de rotação
const rotatingStyle = {
  animation: 'spin 12s linear infinite',
};

const TalkToUs = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(null);
  const [focus, setFocus] = useState({ nome: false, email: false, mensagem: false });
  const [isHover, setIsHover] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => setFocus({ ...focus, [field]: true });
  const handleBlur = (field) => setFocus({ ...focus, [field]: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // Evita múltiplos envios
    setIsSending(true);
    setStatus('Enviando...');
    setSuccess(null);
    try {
      await fetch('https://code-brew.onrender.com/contato/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('Mensagem enviada com sucesso!');
      setSuccess(true);
      setForm({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      setStatus('Erro ao enviar mensagem.');
      setSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: '#f4f7fa' }}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <img src={gearImage} alt="Engrenagem" style={{ position: 'absolute', left: 0, top: 80, width: 120, opacity: 0.08, zIndex: 0, pointerEvents: 'none', ...rotatingStyle }} />
      <img src={gearImage} alt="Engrenagem" style={{ position: 'absolute', right: 0, top: 200, width: 90, opacity: 0.09, zIndex: 0, pointerEvents: 'none', transform: 'rotate(15deg)', ...rotatingStyle }} />
      <img src={gearImage} alt="Engrenagem" style={{ position: 'absolute', left: 40, bottom: 0, width: 70, opacity: 0.07, zIndex: 0, pointerEvents: 'none', transform: 'rotate(-10deg)', ...rotatingStyle }} />
      <div style={{ ...cardStyle, overflow: 'hidden', position: 'relative', zIndex: 1, background: '#fff' }}>
        <img src={gearImage} alt="Engrenagem" style={{ position: 'absolute', left: -38, top: -38, width: 90, opacity: 0.13, zIndex: 0, transform: 'rotate(-20deg)', ...rotatingStyle }} />
        <img src={gearImage} alt="Engrenagem" style={{ position: 'absolute', right: -38, bottom: -38, width: 90, opacity: 0.13, zIndex: 0, transform: 'rotate(30deg)', ...rotatingStyle }} />
        <h1 style={titleStyle}>Fale com a gente</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ ...inputGroup, border: focus.nome ? '2px solid #2b6f7b' : inputGroup.border }}>
            <FaUser style={inputIcon} />
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              onFocus={() => handleFocus('nome')}
              onBlur={() => handleBlur('nome')}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ ...inputGroup, border: focus.email ? '2px solid #2b6f7b' : inputGroup.border }}>
            <FaEnvelope style={inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ ...inputGroup, border: focus.mensagem ? '2px solid #2b6f7b' : inputGroup.border }}>
            <FaCommentDots style={inputIcon} />
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              value={form.mensagem}
              onChange={handleChange}
              onFocus={() => handleFocus('mensagem')}
              onBlur={() => handleBlur('mensagem')}
              required
              style={textareaStyle}
              rows={5}
            />
          </div>
          <button
            type="submit"
            style={isHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {status && (
          <div style={statusStyle(success)}>
            {success === true && <FaCheckCircle size={20} />}
            {success === false && <FaExclamationCircle size={20} />}
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default TalkToUs; 