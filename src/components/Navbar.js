import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const {button, setButton} = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1250) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    AH's Website <i className='fab fa-typo3' />
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
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/NFT' className='nav-links' onClick={closeMobileMenu}>
                        NFT's
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar;