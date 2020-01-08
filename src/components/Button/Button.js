import React from 'react';
import './Button.css';

const Button = ({ label, type, style, onClick }) => {

    const handleClick = () => {
        onClick();
    };

    return (
        <button
            style={style}
            className="movie-button"
            type={type ? type : 'button'}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;