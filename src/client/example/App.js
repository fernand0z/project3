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

import Home from './Home.js';
import AccountPage from './AccountPage.js';

const NotFound = () => (
  <h1>404 not found</h1>
)

class App extends React.PureComponent {
  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/me" component={AccountPage} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}


export default hot(module)(connect()(App));