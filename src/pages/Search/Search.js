import React from 'react';
import Content from '../../components/Content/Content';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from "../../components/MovieList/MovieList";
import axios from 'axios';
import config from '../../utils/config';
import './Search.css';

class Search extends React.Component {
    state = {
        data: [],
        page: 1,
        query: '',
        totalPages: 1
    };

    doSearch = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: config.apiKey,
                    language: 'en-US',
                    query: this.state.query,
                    page: this.state.page,
                    include_adult: true
                }
            });

            const { results } = response.data;

            await this.setState({
                totalPages: response.data['total_pages'],
                data: results
            });

            window.scrollTo(0, 0);
        } catch (e) {
            console.log(e);
            alert('Something wrong happened.');
        }
    };

    handleSearch = async (string) => {
        await this.setState({
            query: string,
            page: 1
        });
        await this.doSearch();
    };

    handleNavigateBack = async () => {
        if (this.state.page !== 1) {
            await this.setState(prevState => ({
                page: prevState.page - 1
            }));
            await this.doSearch();
        }
    };

    handleNavigateNext = async () => {
        if (this.state.page !== this.state.totalPages) {
            await this.setState(prevState => ({
                page: prevState.page + 1
            }));
            await this.doSearch();
        }
    };

    render() {
        let img = (<img
            className="movie-search-img"
            alt="search movie"
            src={require('../../assets/img/waiting.png')}
        />);
        if (this.state.data.length !== 0) img = null;

        return (
            <Content>
                <header className="movie-search-header">
                    Search Movie
                </header>
                {img}
                <SearchBar
                    style={{ marginTop: '24px' }}
                    placeholder="Search for a movie title ..."
                    onClick={this.handleSearch}
                />
                <MovieList
                    data={this.state.data}
                    totalPages={this.state.totalPages}
                    page={this.state.page}
                    history={this.props.history}
                    onNavigateBack={this.handleNavigateBack}
                    onNavigateNext={this.handleNavigateNext}
                />
            </Content>
        );
    }
}

export default Search;