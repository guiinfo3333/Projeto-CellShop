import React from 'react';
import Header from '../src/components/containers/Header';
import Footer from '../src/components/containers/Footer';
import Routes from './routes';
import './style.css';

const App = () => (
  <div className="App">
      <Header />
      <Routes />  
      <Footer />
  </div>
);

export default App;
