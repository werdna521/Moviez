import React from 'react';
import Button from '../Button/Button';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        search: ''
    };

    handleSearch = () => {
        this.props.onClick(this.state.search);
    };

    handleInput = (e) => {
        this.setState({
            search: e.target.value
        });
    };

    render() {
        return (
            <section style={this.props.style} className="movie-search-bar">
                <input
                    className="movie-search-bar-input"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.search}
                    onChange={this.handleInput}
                />
                <Button
                    style={{ marginLeft: '24px' }}
                    label="Search"
                    onClick={this.handleSearch}
                />
            </section>
        );
    }
}

export default SearchBar;