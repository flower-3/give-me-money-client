import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import GrantTable from './components/GrantTable';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <GrantTable />
      <Footer />
    </div>
  );
}

export default App;
