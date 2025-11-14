import './App.css';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
import OwlCarousel from 'react-owl-carousel3';
import About from './pages/About';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Feature from './pages/Feature';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { Route, Routes } from 'react-router-dom';


function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="App">
      <RoutesWrapper/>
    </div>
  );
}

// AuthContext 안에서만 useContext 사용
const RoutesWrapper = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="*"
        element={<Error />}
      />
    </Routes>
  );
};

export default App;
