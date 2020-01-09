import React from 'react';
import Content from '../../components/Content/Content';
import Button from '../../components/Button/Button';
import './Feedback.css';

class Feedback extends React.Component {
    state = {
        name: '',
        email: '',
        feedback: ''
    };

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleFeedback = (e) => {
        this.setState({
            feedback: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length === 0) {
            return alert('Name must be filled');
        }

        if (this.state.email.length === 0) {
            return alert('Email must be filled');
        }

        if (this.state.feedback.length === 0) {
            return alert('Feedback must be filled');
        }

        alert('Thank you for your feedback!');
        window.location.reload();
    };

    render() {
        return (
            <Content>
                <section className="movie-feedback-container">
                    <img
                        className="movie-feedback-img"
                        alt="feedback"
                        src={require('../../assets/img/done.png')}
                    />
                    <form onSubmit={this.handleSubmit} className="movie-feedback-form">
                        <article className="movie-feedback-title">
                            Got any feedback? Tell us via this form below
                        </article>
                        <input
                            className="movie-feedback-input"
                            type="text"
                            placeholder="Name"
                            onChange={this.handleName}
                            value={this.state.name}
                        />
                        <input
                            className="movie-feedback-input"
                            type="email"
                            placeholder="Email"
                            onChange={this.handleEmail}
                            value={this.state.email}
                        />
                        <textarea
                            rows="5"
                            className="movie-feedback-text-area"
                            placeholder="Feedback"
                            onChange={this.handleFeedback}
                            value={this.state.feedback}
                        />
                        <Button
                            style={{ marginTop: '16px', width: '45vw' }}
                            type="submit"
                            label="Send Feedback"
                        />
                    </form>
                </section>
            </Content>
        )
    }
}

export default Feedback;