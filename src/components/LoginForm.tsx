import React, { useState, FormEvent } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí integrarías el backend para autenticación
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>Correo Electrónico</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          style={{
            width: '100%', 
            padding: '0.5rem', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            marginTop: '0.5rem'
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold' }}>Contraseña</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          style={{
            width: '100%', 
            padding: '0.5rem', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            marginTop: '0.5rem'
          }}
        />
      </div>
      <button 
        type="submit" 
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: 'rgba(13, 48, 72, .9)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
