import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import ShowCard from './ShowCard.js';
import { syncAccount } from '../actions';

import Modal from './Modal.js';
import SearchDisplay from './SearchDisplay.js';
import TrackedShowsDisplay from './TrackedShowsDisplay.js';
import CalendarDisplay from './CalendarDisplay.js'

class AccountPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  componentWillMount() {
    const { user } = this.props;
    if(user.exists) {
      this.props.sync();
    }
  }

  showModal = () => {
    this.setState({ showModal: true });
  }


  hideModal = () => {
    this.setState({ showModal: false });
  }

  reload = () => {
    this.props.sync();
  }

  render() {
    const { sync } = this.props;

    return (
      <React.Fragment>

      <br />
      <button onClick={this.showModal}>Add Show</button>

      <Modal show={this.state.showModal} close={this.hideModal}>
        <SearchDisplay />
      </Modal>

      <div>
        <Link to="/me/shows">Shows</Link>
        ||
        <Link to="/me/calendar">Calendar</Link>
      </div>

      <Switch>
        <Route path="/me/shows" component={TrackedShowsDisplay} />
        <Route path="/me/calendar" component={CalendarDisplay} />
        <Redirect from="/me" to="/me/shows" />
      </Switch>

      <br />
      <button onClick={this.props.sync}>Reload</button>
      <a href="/logout">Logout</a>


      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sync: () => dispatch(syncAccount())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);