import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route exact path='/' component={Home} />
      </Routes>
    </Router>
    </>
  );
}

export default App;