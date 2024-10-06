import React from 'react';
import './App.css';
import ProducerList from './components/ProducerList';
import AddProducer from './components/AddProducer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gerenciamento de Produtores Rurais</h1>
      </header>
      <Dashboard />
      <AddProducer />
      <ProducerList />
    </div>
  );
}

export default App;