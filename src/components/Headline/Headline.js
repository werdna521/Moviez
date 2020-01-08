import React from 'react';
import Button from '../Button/Button';
import './Headline.css';

class Headline extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        if (window.innerWidth >= 1024) {
            const height = window.innerHeight - 100;
            this.containerRef.current.style.height = `${height}px`;
        }
    }

    render() {
        return (
            <section ref={this.containerRef} className="movie-headline">
                <section className="movie-headline-container">
                    <div className="movie-headline-title">Moviez</div>
                    <div className="movie-headline-caption">Make movie part of your life</div>
                    <img className="movie-headline-img" src={require('../../assets/img/welcome.png')} alt="welcome"/>
                    <div style={{ marginTop: '24px' }} className="movie-headline-caption">We make searching for movie simple and easy</div>
                    <div className="movie-headline-caption">as life is not complete without movie</div>
                    <Button
                        label="Search Movies"
                        style={{ marginTop: '16px' }}
                        onClick={() => this.props.history.push('/search')}
                    />
                </section>
            </section>
        );
    }
}

export default Headline;