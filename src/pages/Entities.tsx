import React from 'react';
import Header from '../components/Header';
import EntityForm from '../components/EntityForm';
import EntityList from '../components/EntityList';

const Entities: React.FC = () => (
  <div>
    <Header />
    <div style={{ padding: '2rem' }}>
      <h2>Gestión de Entidades</h2>
      <EntityForm />
      <EntityList />
    </div>
  </div>
);

export default Entities;