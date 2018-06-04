import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { getUser } from '../actions';

import Home from './Home.js';
import AccountPage from './AccountPage.js';

const NotFound = () => (
  <h1>404 not found</h1>
)

const AuthRoute = (props) => {
  if(props.auth) {
    return <Route {...props} />
  } else {
    return <Redirect to="/" />
  }
}

class App extends React.PureComponent {
  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    const { user } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute auth={user.exists} path="/me" component={AccountPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}


export default hot(module)(connect(mapStateToProps)(App));