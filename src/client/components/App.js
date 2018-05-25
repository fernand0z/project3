import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { getUser } from '../actions';

import SearchPage from '../components/SearchPage';
import ProfilePage from '../components/ProfilePage';
import Modal from '../components/Modal.js';
import styled from 'styled-components';

const Home = () => (
  <h1>Homepage</h1>
)

const Login = () => (
  <a href="/login/google">Login with Google with Reactapp!</a>
)

const NotFound = () => (
  <h1>404 not found</h1>
)

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/modal" component={Modal} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default hot(module)(connect()(App));