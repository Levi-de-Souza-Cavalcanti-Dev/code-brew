import React, { useState } from 'react';

const TalkToUs = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const response = await fetch('http://localhost:5000/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setForm({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus('Erro ao enviar mensagem.');
      }
    } catch (error) {
      setStatus('Erro ao conectar com o servidor.');
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      <h1>Fale Conosco</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', resize: 'vertical' }}
        />
        <button type="submit" style={{ padding: 10, borderRadius: 4, background: '#512BD4', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
      {status && <p style={{ marginTop: 16 }}>{status}</p>}
    </div>
  );
};

export default TalkToUs; 