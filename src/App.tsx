import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import GrantTable from './components/GrantTable';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { Route } from 'react-router';
import MyPage from './components/MyPage/MyPage';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Route path="/" exact={true} component={GrantTable} />
      <Route path="/modal" component={Modal} />
      <Route path="/mypage" component={MyPage} />
      <Footer />
    </div>
  );
}

export default App;
