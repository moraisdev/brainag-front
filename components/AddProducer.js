// src/components/AddProducer.js
import React, { useState } from 'react';
import { addProducer } from '../services/api';

const AddProducer = () => {
  const [producerData, setProducerData] = useState({
    cpf_cnpj: '',
    name: '',
    farm_name: '',
    city: '',
    state: '',
    total_area: '',
    agricultural_area: '',
    vegetation_area: '',
    crops: '',
  });

  const handleChange = (e) => {
    setProducerData({
      ...producerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cropsArray = producerData.crops.split(',').map((crop) => crop.trim());
    const finalProducerData = {
      ...producerData,
      total_area: parseFloat(producerData.total_area),
      agricultural_area: parseFloat(producerData.agricultural_area),
      vegetation_area: parseFloat(producerData.vegetation_area),
      crops: cropsArray,
    };

    await addProducer(finalProducerData);
    alert('Produtor adicionado com sucesso!');

    setProducerData({
      cpf_cnpj: '',
      name: '',
      farm_name: '',
      city: '',
      state: '',
      total_area: '',
      agricultural_area: '',
      vegetation_area: '',
      crops: '',
    });
  };

  return (
    <div>
      <h2>Adicionar Produtor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cpf_cnpj"
          value={producerData.cpf_cnpj}
          onChange={handleChange}
          placeholder="CPF ou CNPJ"
          required
        />
        <input
          type="text"
          name="name"
          value={producerData.name}
          onChange={handleChange}
          placeholder="Nome do Produtor"
          required
        />
        <input
          type="text"
          name="farm_name"
          value={producerData.farm_name}
          onChange={handleChange}
          placeholder="Nome da Fazenda"
          required
        />
        <input
          type="text"
          name="city"
          value={producerData.city}
          onChange={handleChange}
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          name="state"
          value={producerData.state}
          onChange={handleChange}
          placeholder="Estado"
          required
        />
        <input
          type="number"
          name="total_area"
          value={producerData.total_area}
          onChange={handleChange}
          placeholder="Área Total (hectares)"
          required
        />
        <input
          type="number"
          name="agricultural_area"
          value={producerData.agricultural_area}
          onChange={handleChange}
          placeholder="Área Agrícola (hectares)"
          required
        />
        <input
          type="number"
          name="vegetation_area"
          value={producerData.vegetation_area}
          onChange={handleChange}
          placeholder="Área de Vegetação (hectares)"
          required
        />
        <input
          type="text"
          name="crops"
          value={producerData.crops}
          onChange={handleChange}
          placeholder="Culturas (ex: Soja, Milho, Algodão)"
          required
        />
        <button type="submit">Adicionar Produtor</button>
      </form>
    </div>
  );
};

export default AddProducer;