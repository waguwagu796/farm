
import './App.css';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UsersPage from './pages/UsersPage';


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
