import React from 'react';
import './MovieList.css';
import MovieCard from "../MovieCard/MovieCard";
import Button from "../Button/Button";

const MovieList = ({ data, onNavigateBack, onNavigateNext, totalPages, page, history }) => {
    const movieCards = data.map(({ poster_path: posterPath, title, vote_average: rating, release_date: date, id }, i) => (
        <MovieCard
            key={i}
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            title={title}
            rating={rating}
            date={date}
            id={id}
            history={history}
        />
    ));

    const handleNavigationBack = () => {
        onNavigateBack();
    };

    const handleNavigationNext = () => {
        onNavigateNext();
    };

    let prevButton = null;
    let nextButton = null;

    if (page !== 1 && onNavigateBack) prevButton = <Button label="Prev" onClick={handleNavigationBack} />;
    if (page !== totalPages && onNavigateNext) nextButton = <Button style={{ marginLeft: '16px' }} label="Next" onClick={handleNavigationNext} />;

    const number = Math.floor(window.innerWidth / 282);
    let style = null;
    if (number !== 0) style = { gridTemplateColumns: `repeat(${number}, 1fr)` };

    let pagination = <div className="movie-list-pagination">{`Page ${page} of ${totalPages}`}</div>;
    if (totalPages === 1 || !page || !totalPages) pagination = null;

    return (
        <section className="movie-list">
            <div style={style} className="movie-list-grid">
                {movieCards}
            </div>
            <div className="movie-list-buttons">
                {prevButton}
                {nextButton}
                {pagination}
            </div>
        </section>
    );
};

export default MovieList;