import React from 'react';
import Button from '../Button/Button';
import './MovieCard.css';

const MovieCard = (props) => {
    const handleClick = () => {
        props.history.push(`/${props.id}/details`)
    };

    return (
        <section className="movie-card">
            <img alt={props.src} className="movie-card-img" src={props.src} />
            <div className="movie-card-title">{props.title}</div>
            <div className="movie-card-rating">{`Rating: ${props.rating} / 10`}</div>
            <div className="movie-card-date">{props.date}</div>
            <Button label="See Details" onClick={handleClick} />
        </section>
    );
};

export default MovieCard;