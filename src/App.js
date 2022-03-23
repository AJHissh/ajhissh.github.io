import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import NFT from './components/pages/nft';
import Login from './components/pages/login';
import Register from './components/pages/register';


function App() {
  return (
    <div className="app">
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/NFT' element={<NFT />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes> 
      </Router>
      </>
    </div>
  );
}


export default App;