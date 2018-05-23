import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import axios from 'axios';

const Home = () => (
  <h1>Homepage</h1>
)

const Login = () => (
  <a href="/login/google">Login with Google with Reactapp!</a>
)

const Profile = () => (
  <h1>User info here</h1>
)

const NotFound = () => (
  <h1>404 not found</h1>
)

class App extends React.Component {
  componentWillMount() {
    axios.get('/api/profile').then(data => console.log(data));
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/reagurieag">should break</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default hot(module)(App);