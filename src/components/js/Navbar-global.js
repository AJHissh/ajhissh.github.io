import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
// import { Button } from './Button-global';
import '../styles/Navbar.css'
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {FcGlobe} from "react-icons/fc";
import { useSelector, useDispatch } from 'react-redux';
import {Logout, reset} from '../../features/auth/authSlice';
import {toast} from 'react-toastify';




function Navbar() {
    const [click, setClick] = useState(false);
    const {button, setButton} = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const onLogout = () => { 
            dispatch(Logout())
            dispatch(reset())
            navigate('/')
            toast("Logout Successful" , {
                position: toast.POSITION.TOP_CENTER})
        }


    const showButton = () => {
        if(window.innerWidth <= 1250) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const onForum = () => {

        if (!user) {
            navigate('/login')
            window.location.reload(true);
            alert("You must login to view forum")
            // toast('Login required to view forum', {
            //     position: toast.POSITION.TOP_CENTER})
        }}



    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                <i class="fw fw-fw">  Andrew Hisshion</i> 
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/forum' className='nav-links' onClick={()=> {                  
                        onForum();
                        closeMobileMenu();
                    }}>
                        Forum
                    </Link>
                </li>
                {user ? <li className='logout-nav'>
                  <button className='btn btn-primary' id='logout' onClick={()=>{
                      onLogout();
                      closeMobileMenu();
                  }}>
                      Logout
                  </button>
              </li> : <>
                  <li className='login-nav'>
                  <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                      Login
                  </Link>
              </li>
                </>}
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;