import React from 'react';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer';
import Header from './pages/Header';




const App = () => {
  return (
    <div className="app">
     
      <Header />
      <Home />
       <Footer />
    </div>
  );
};

export default App;

