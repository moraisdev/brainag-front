import React, { useEffect, useState } from 'react';
import { getProducers, deleteProducer } from '../services/api';

const ProducerList = () => {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    loadProducers();
  }, []);

  const loadProducers = async () => {
    const data = await getProducers();
    setProducers(data);
  };

  const handleDelete = async (producerId) => {
    await deleteProducer(producerId);
    loadProducers();    
  };

  return (
    <div>
      <h2>Lista de Produtores</h2>
      <ul>
        {producers.map((producer) => (
          <li key={producer.id}>
            {producer.name} - {producer.farm_name}
            <button onClick={() => handleDelete(producer.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProducerList;