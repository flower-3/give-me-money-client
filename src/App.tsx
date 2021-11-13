import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import GrantTable from './components/GrantTable';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Route path="/" exact={true} component={GrantTable} />
      <Footer />
    </div>
  );
}

export default App;
