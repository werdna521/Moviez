import React from 'react';
import Content from '../../components/Content/Content';
import MovieList from "../../components/MovieList/MovieList";
import axios from 'axios';
import config from '../../utils/config';
import './Trending.css';

class Trending extends React.Component {
    state = {
        dataTrending: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
                params: {
                    api_key: config.apiKey
                }
            });

            const { results } = response.data;

            await this.setState({
                dataTrending: results
            });
        } catch (e) {
            console.log(e);
            alert('Something wrong happened.');
        }
    };

    render() {
        return (
            <Content>
                <header className="movie-trending-header">
                    Trending Movies of the Day
                </header>
                <MovieList
                    data={this.state.dataTrending}
                    history={this.props.history}
                />
            </Content>
        );
    }
}

export default Trending;