import React, { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const response = await api.get("/entities");
        setEntities(response.data);
      } catch (err) {
        console.error("Error al obtener las entidades", err);
      }
    };

    fetchEntities();
  }, []);

  return (
    <div className="home-container">
      <h1>Listado de Entidades</h1>
      <ul>
        {entities.map((entity) => (
          <li key={entity}>
            <h2>{entity}</h2>
            <p>{entity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
