import React from 'react';
import './Footer.css';

const iconProps = [
    'logo-github',
    'logo-linkedin',
    'logo-youtube',
    'logo-facebook',
    'logo-twitter',
    'logo-instagram',
    'logo-whatsapp'
];

const Footer = () => {
    const ionIcons = iconProps.map(iconName => (
        <ion-icon key={iconName} class="movie-footer-contact" name={iconName} />
    ));

    return (
        <footer className="movie-footer">
            <section className="movie-footer-caption">&copy; 2020 Moviez</section>
            <section className="movie-footer-contacts">
                {ionIcons}
            </section>
        </footer>
    );
};

export default Footer;