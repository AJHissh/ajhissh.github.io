import React from "react";
import '../login.css';
import {FcDownLeft, FcMultipleInputs} from 'react-icons/fc';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <header className="login-header">
            <div className="login-link">
            <ul className="login-button">
                    <Link to='/login'>
                        <FcDownLeft /> Login
                    </Link>
            </ul>
            <ul className="register-button">
                    <Link to='/register'>
                        <FcMultipleInputs /> Register
                    </Link>
            </ul>
            </div>       
        </header>
    )
}

export default Login;