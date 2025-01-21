import React, { useState, useEffect } from 'react';

interface Entity {
  id: number;
  name: string;
  description: string;
}

const EntityList: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/entities')
      .then((response) => response.json())
      .then((data) => setEntities(data))
      .catch((error) => console.error('Error al cargar entidades:', error));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`https://localhost:5001/api/entities/${id}`, {
      method: 'DELETE',
    })
      .then(() => setEntities(entities.filter((entity) => entity.id !== id)))
      .catch((error) => console.error('Error al eliminar entidad:', error));
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <thead style={{ backgroundColor: 'rgba(13, 48, 72, .9)', color: 'white' }}>
          <tr>
            <th style={{ padding: '0.5rem', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '0.5rem', textAlign: 'left' }}>Nombre</th>
            <th style={{ padding: '0.5rem', textAlign: 'left' }}>Descripción</th>
            <th style={{ padding: '0.5rem', textAlign: 'center' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entities.map((entity) => (
            <tr key={entity.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '0.5rem' }}>{entity.id}</td>
              <td style={{ padding: '0.5rem' }}>{entity.name}</td>
              <td style={{ padding: '0.5rem' }}>{entity.description}</td>
              <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                <button
                  onClick={() => handleDelete(entity.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    margin: '0 0.5rem',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntityList;