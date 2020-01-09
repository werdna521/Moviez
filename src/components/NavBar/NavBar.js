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
    },
    {
        url : '/feedback',
        label: 'Feedback'
    }
];

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.ref = React.createRef();
    }

    handleClick = () => {
        if (this.state.show) this.ref.current.style.display = 'flex';
        else this.ref.current.style.display = 'none';
        this.setState(prevState => ({
            show: !prevState.show
        }));
    };

    render() {
        const navlinks = links.map(({url, label}) => (
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
                <section onClick={this.handleClick} className="hamburger-container">
                    <ion-icon name="menu" class="hamburger"/>
                </section>
                <div className="movie-nav-logo">MOVIEZ</div>
                <div ref={this.ref} className="movie-nav-menu-container">
                    {navlinks}
                </div>
            </nav>
        );
    }
}

export default NavBar;