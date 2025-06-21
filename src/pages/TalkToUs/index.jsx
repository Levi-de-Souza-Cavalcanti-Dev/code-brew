import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import gearImage from '../../component/imagens/engrenagem-removebg-preview.png';
import { 
  cardStyle,
  titleStyle,
  inputGroup,
  inputIcon,
  inputStyle,
  textareaStyle,
  buttonStyle,
  statusStyle,
  buttonHoverStyle,
  rotatingStyle
} from './style';

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
    if (isSending) return;
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