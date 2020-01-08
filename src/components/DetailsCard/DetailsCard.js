import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ src, title, imdb, genres, runtime, tagline, originalLang, budget, revenue, productions, date, rating, overview }) => {
    const genresReal = [];
    if (genres) genres.forEach(genre => genresReal.push(genre.name));
    const genresValue = genresReal.join(', ');

    const productionComps = [];
    if (productions) productions.forEach(p => productionComps.push(p.name));
    const productionsValue = productionComps.join(', ');

    return (
        <section className="movie-details-card">
            <img
                alt="brem"
                className="movie-details-card-img"
                src={src}
            />
            <article className="movie-details-card-container">
                <div className="movie-details-card-title">
                    {`${title} (IMDB ID: ${imdb})`}
                </div>
                <div className="movie-details-card-italic">
                    {`Genres: ${genresValue}`}
                </div>
                <div className="movie-details-card-italic">
                    {`Runtime: ${runtime}`}
                </div>
                <div className="movie-details-card-italic">
                    {`Tagline: ${tagline}`}
                </div>
                <div className="movie-details-card-regular">
                    {`Original Language: ${originalLang}`}
                </div>
                <div className="movie-details-card-regular">
                    {`Budget: ${budget}`}
                </div>
                <div className="movie-details-card-regular">
                    {`Revenue: ${revenue}`}
                </div>
                <div className="movie-details-card-regular">
                    {`Production companies: ${productionsValue}`}
                </div>
                <div className="movie-details-card-regular">
                    {`Release date: ${date}`}
                </div>
                <div className="movie-details-card-regular">
                    {`Rating: ${rating} / 10`}
                </div>
                <div className="movie-details-card-overview">
                    Overview:
                </div>
                <div className="movie-details-card-overview">
                    {overview}
                </div>
            </article>
        </section>
    );
};

export default DetailsCard;