import React from 'react';
import Content from '../../components/Content/Content';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import axios from 'axios';
import config from "../../utils/config";

class Details extends React.Component {
    state = {
        data: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}`, {
                params: {
                    api_key: config.apiKey,
                    language: 'en-US',
                }
            });

            await this.setState({
                data: response.data
            });

            console.log(response.data);
        } catch (e) {
            return alert('Something wrong happened.');
        }
    }

    render() {
        return (
            <Content>
                <DetailsCard
                    src={`https://image.tmdb.org/t/p/w500${this.state.data['poster_path']}`}
                    title={this.state.data.title}
                    imdb={this.state.data['imdb_id']}
                    genres={this.state.data.genres}
                    runtime={this.state.data.runtime}
                    tagline={this.state.data.tagline}
                    originalLang={this.state.data['original_language']}
                    date={this.state.data['release_date']}
                    rating={this.state.data['vote_average']}
                    overview={this.state.data.overview}
                    budget={this.state.data.budget}
                    revenue={this.state.data.revenue}
                />
            </Content>
        );
    }
}

export default Details;