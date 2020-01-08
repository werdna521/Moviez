import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const links = [
    {
        url : '/',
        label: 'Home'
    },
    {
        url : '/search',
        label: 'Search'
    },
    {
        url : '/trending',
        label: 'Trending'
    },
    {
        url : '/upcoming',
        label: 'Upcoming'
    },
    {
        url : '/popular',
        label: 'Popular'
    }
];

const NavBar = () => {
    const navlinks = links.map(({ url, label }) => (
        <NavLink
            key={label}
            className="movie-nav-menu"
            activeClassName="movie-nav-menu-active"
            to={url}
            isActive={(match, location) => location.pathname === url}
        >
            {label}
        </NavLink>
    ));

    return (
        <nav className="movie-nav">
            <div className="movie-nav-logo">MOVIEZ</div>
            <div className="movie-nav-menu-container">
                {navlinks}
            </div>
        </nav>
    );
};

export default NavBar;