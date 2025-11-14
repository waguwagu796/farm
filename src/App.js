
import './App.css';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
import OwlCarousel from 'react-owl-carousel3';

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
