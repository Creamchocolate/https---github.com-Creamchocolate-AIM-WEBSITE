import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar.js';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import AboutUs from './component/pages/AboutUs';

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes> 
          <Route index element={<Home />} />
          <Route  path='/services' index element={<Services/>} />
          <Route path='products' index element={<Products />} />
          <Route path='aboutUs' index element={<AboutUs />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
