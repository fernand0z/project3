import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShowDisplay from './ShowDisplay.js';
import { toggleEpisode, syncAccount } from '../actions';

import Modal from './Modal.js';
import SearchDisplay from './SearchDisplay.js';

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

  handleToggle = (showId, episodeId) => {
    this.props.toggleEpisode(showId, episodeId);
  }

  addShow = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  reload = () => {
    this.props.sync();
  }

  render() {
    const { user, shows } = this.props;
    return (
      <React.Fragment>

      <Modal show={this.state.showModal} close={this.hideModal}>
        <SearchDisplay />
      </Modal>

      <br />
      <button onClick={this.addShow}>Add Show</button>
      <br />
      <button onClick={this.reload}>Reload</button>
      <a href="/logout">Logout</a>

      {
        Object.values(shows).map(show =>
          <ShowDisplay
            key={show.id}
            show={show}
            toggle={this.handleToggle}/>
        )
      }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.trackedShows,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEpisode: (showId, episodeId) =>
      dispatch(toggleEpisode({ showId, episodeId })),
    sync: () => dispatch(syncAccount())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);