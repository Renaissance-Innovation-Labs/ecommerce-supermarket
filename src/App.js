import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage addToCart={addToCart} />} />
        <Route path="/pages/ProductPage" element={<ProductPage addToCart={addToCart} />} />
      </Routes>
    </Router>
  )
}

export default App
