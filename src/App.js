
import './App.css';

import Header from './components/Header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routing from './routing.js';
import React from 'react';

import HomePage from './pages/homePage/homePage.js'
import Products from './pages/products/products.js'
import NotImplemented from './pages/notImplemented/notImplemented.js'
import NavBar from './components/Navigator.js'
import Footer from './components/Footer.js'
import Detail from './pages/details/details.js'
import Cart from './pages/shoppingCart/shoppingCart.js'

function App() {
  return (
    <div className='background'>
      <Router>
        <Header/>
        <NavBar/>
        <Routes>
          <Route exact="true" path={routing.home} element={<HomePage/>}/>
          <Route exact="true" path={routing.products} element={<Products/>}/>
          <Route exact="true" path={routing.notImplemented} element={<NotImplemented/>}/>
          <Route exact="true" path={`${routing.products}/:id`} element={<Detail/>}/>
          <Route exact="true" path={routing.cart} element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
