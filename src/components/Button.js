import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn-primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']


export const Button = ({
    children, type, onClick, buttonStyle, buttonSize
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[1];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    ;

    return (
        <Link to='/login' className='btn-mobile'>
            <button className={checkButtonSize && checkButtonStyle}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
};
