import React from 'react';
import Content from '../../components/Content/Content';
import MovieList from "../../components/MovieList/MovieList";
import axios from 'axios';
import config from '../../utils/config';
import './Upcoming.css';

class Upcoming extends React.Component {
    state = {
        dataUpcoming: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
                params: {
                    api_key: config.apiKey,
                    language: 'en-US',
                    page: 1
                }
            });

            const { results } = response.data;

            await this.setState({
                dataUpcoming: results
            });
        } catch (e) {
            console.log(e);
            alert('Something wrong happened.');
        }
    };

    render() {
        return (
            <Content>
                <header className="movie-upcoming-header">
                    Upcoming Movies
                </header>
                <MovieList
                    data={this.state.dataUpcoming}
                    history={this.props.history}
                />
            </Content>
        );
    }
}

export default Upcoming;