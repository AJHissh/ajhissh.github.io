import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import About from './components/pages/about';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes> 
      </Router>
    </div>
  );
}


export default App;