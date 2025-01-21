import React, { useState } from 'react';

const EntityForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('https://localhost:5001/api/entities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Entidad creada exitosamente');
          setName('');
          setDescription('');
        } else {
          alert('Error al crear entidad');
        }
      })
      .catch((error) => console.error('Error al crear entidad:', error));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Nombre</label>
        <input 
          id="name" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="description" style={{ fontWeight: 'bold' }}>Descripción</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          style={{
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minHeight: '100px',
          }}
        />
      </div>
      <button 
        type="submit" 
        style={{
          backgroundColor: 'rgba(13, 48, 72, .9)',
          color: 'white',
          padding: '0.75rem',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Crear Entidad
      </button>
    </form>
  );
};

export default EntityForm;
