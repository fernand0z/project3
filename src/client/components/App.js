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
import Home from './Home';
import Wrapper from './Wrapper';
import styled from 'styled-components';

// const Home = () => (
//   <div>
//     <h1>Homepage</h1>
//     <form action="/login/google">
//       <input type="submit" value="Sign-in with Google" />
//     </form>
//   </div>
// )
import SearchPage from '../components/SearchPage';
import ProfilePage from '../components/ProfilePage';
import Modal from '../components/Modal.js';


// const Home = () => (
//   <h1>Homepage</h1>
// )

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

const RedText = styled.div`color: red`;
const Test = () => <RedText>testesrgeragreag</RedText>

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/modal" component={Modal} />
            <Route component={NotFound} />
          </Switch>
          </div>
      </Router>
    );
  }
}

export default hot(module)(connect()(App));