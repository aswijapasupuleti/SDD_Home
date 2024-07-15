import React from 'react';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Slideshow from './pages/Slideshow';




const App = () => {
  return (
    <div className="app">
     
      <Header />
      <Slideshow /> 
      <Home />
       <Footer />
    </div>
  );
};

export default App;

