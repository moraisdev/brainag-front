import axios from 'axios';

const API_URL = 'http://backend:8000';

const api = axios.create({
  baseURL: API_URL,
});

export const getProducers = async () => {
  const response = await api.get('/producers/');
  return response.data;
};

export const addProducer = async (producerData) => {
  const response = await api.post('/producers/', producerData);
  return response.data;
};

export const deleteProducer = async (producerId) => {
  const response = await api.delete(`/producers/${producerId}`);
  return response.data;
};

export const getDashboardData = async () => {
  const response = await api.get('/dashboard/totals');
  return response.data;
};

export const getStateDistribution = async () => {
  const response = await api.get('/dashboard/state-distribution');
  return response.data;
};

export const getCropDistribution = async () => {
  const response = await api.get('/dashboard/crop-distribution');
  return response.data;
};