import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details';
import Trending from './pages/Trending/Trending';
import Upcoming from './pages/Upcoming/Upcoming';
import Popular from './pages/Popular/Popular';
import Feedback from './pages/Feedback/Feedback';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './main.css';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavBar />
                    <Route path="/search" component={Search} />
                    <Route path="/:movieId/details" component={Details} />
                    <Route path="/trending" component={Trending} />
                    <Route path='/upcoming' component={Upcoming} />
                    <Route path="/popular" component={Popular} />
                    <Route path='/feedback' component={Feedback} />
                    <Route path="/" exact component={Home} />
                    <Footer />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;