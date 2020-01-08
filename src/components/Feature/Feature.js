import React from 'react';
import './Feature.css';

const Feature = ({ icon, subtitle }) => {

    return (
        <section className="movie-feature">
            <ion-icon class="movie-feature-icon" name={icon} />
            <div className="movie-feature-subtitle">
                {subtitle}
            </div>
        </section>
    );
};

export default Feature;