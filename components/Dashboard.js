// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getDashboardData, getStateDistribution, getCropDistribution } from '../services/api';

const Dashboard = () => {
  const [totals, setTotals] = useState({});
  const [stateDistribution, setStateDistribution] = useState([]);
  const [cropDistribution, setCropDistribution] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    const totalsData = await getDashboardData();
    setTotals(totalsData);

    const statesData = await getStateDistribution();
    setStateDistribution(statesData);

    const cropsData = await getCropDistribution();
    setCropDistribution(cropsData);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total de Fazendas: {totals.total_farms}</p>
      <p>Área Total: {totals.total_area} hectares</p>

      <h3>Distribuição por Estado</h3>
      <ul>
        {stateDistribution.map((state) => (
          <li key={state.state}>{state.state}: {state.total_farms} fazendas</li>
        ))}
      </ul>

      <h3>Distribuição por Cultura</h3>
      <ul>
        {cropDistribution.map((crop) => (
          <li key={crop.crop}>{crop.crop}: {crop.total_farms} fazendas</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;