import React from 'react';
import Feature from '../Feature/Feature';
import './FeatureList.css';

const featureProps = [
    {
        icon: 'search',
        subtitle: 'Search for your favorite movie title'
    },
    {
        icon: 'star-half',
        subtitle: 'See a movie\'s rating'
    },
    {
        icon: 'stats',
        subtitle: 'Look for top movies of the day'
    },
    {
        icon: 'play-circle',
        subtitle: 'Search for now playing movie'
    }
];

const FeatureList = () => {
    const features = featureProps.map(({ icon, subtitle }) => (
        <Feature key={icon} icon={icon} subtitle={subtitle} />
    ));

    return (
        <section className="movie-feature-list">
            {features}
        </section>
    );
};

export default FeatureList;