import React from 'react';
import Content from '../../components/Content/Content';
import MovieList from "../../components/MovieList/MovieList";
import axios from 'axios';
import config from '../../utils/config';
import './Popular.css';

class Popular extends React.Component {
    state = {
        dataPopular: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: config.apiKey,
                    language: 'en-US',
                    page: 1
                }
            });

            const { results } = response.data;

            await this.setState({
                dataPopular: results
            });
        } catch (e) {
            console.log(e);
            alert('Something wrong happened.');
        }
    };

    render() {
        return (
            <Content>
                <header className="movie-popular-header">
                    Popular Movies
                </header>
                <MovieList
                    data={this.state.dataPopular}
                    history={this.props.history}
                />
            </Content>
        );
    }
}

export default Popular;