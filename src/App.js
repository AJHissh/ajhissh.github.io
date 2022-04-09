import './components/styles/App.css'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/js/Navbar'
import Home from './components/pages/home'
import Login from './components/pages/login'
import Register from './components/pages/register'
import About from './components/pages/about'
import Forum from './components/pages/forum-main'



function App() {
  return (
    <div className="app">
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Forum' element={<Forum />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes> 
      </Router>
      <ToastContainer />
      </>
    </div>
  );
}


export default App;