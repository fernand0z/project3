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

const Home = () => (
  <h1>Homepage</h1>
)

const Login = () => (
  <a href="/login/google">Login with Google with Reactapp!</a>
)

const Profile = (props) => (
  <h1>{props.user.name}</h1>
)

const ViewProfile = connect(
  state => ({ user: state.user })
)(Profile);


const NotFound = () => (
  <h1>404 not found</h1>
)

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getUser())
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><a href="/logout">Logout</a></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/reagurieag">should break</Link></li>
          </ul>

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