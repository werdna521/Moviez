import React from 'react';
import './Content.css';

const Content = (props) => {
    return (
        <main className="movie-content">
            {props.children}
        </main>
    );
};

export default Content;