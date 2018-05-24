import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUser } from '../actions';
import {Home} from './Home';


const Home1 = () => (
  <h1>Homepage</h1>
)

const Login = () => (
  <a href="/login/google">Login with Google with Reactapp!</a>
)

const Profile = (props) => {
  if(props.user.name) {
    return <h1>{props.user.name}</h1>;
  } else {
    return <h1>Not logged in</h1>
  }
}

const ViewProfile = connect(
  state => state
)(Profile);


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
        <div>
          <Home />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={ViewProfile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(connect()(App));