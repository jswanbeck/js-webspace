import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Miss, Route } from 'react-router-dom';
import { Container } from 'rebass';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Stuff from './Stuff';
import Projects from './Projects';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.styles
        };
    }

    getChildContext() {
        return {
            rebass: this.state.theme
        };
    }

    render() {
        return (
            <Router>
                <Container>
                    <NavBar />
                    <Container>
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/projects" component={Projects} />
                        <Footer />
                    </Container>
                </Container>
            </Router>
        );
    }
}

App.childContextTypes = {
    rebass: React.PropTypes.object
};

export default App;
