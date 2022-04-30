import './components/styles/App.css'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './components/page-routes/about-route'
import ForumPage from './components/page-routes/forum-route'
import LoginPage from './components/page-routes/login-route'
import RegisterPage from './components/page-routes/register-route'
import ContactPage from './components/page-routes/contact-route'
import HomePage from './components/page-routes/home-route'






function App() {
  return (
    <div className="app">
      <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/Forum' element={<ForumPage />} />   
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes> 
      </Router>
      <ToastContainer />
      </>
    </div>
  );
}


export default App;