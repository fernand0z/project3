import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchShows, trackNewShow } from '../actions';
import styled, { keyframes } from 'styled-components';
import spinnergif from '../components/images/spinner.gif';

class SearchDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { query: '' }
    this.searchShows = debounce(props.searchShows, 500);
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.searchShows(e.target.value);
  }

  addShow(show) {
    this.props.trackNewShow(show);
    this.setState({ query: '' });
  }

  render() {
    const { query } = this.state;
    let { searchResult, updating, trackedShows } = this.props;

    return (
      <React.Fragment>
        <input type="text"
          value={ query }
          placeholder='Search for Shows'
          onChange={ this.handleChange }
        />
        <ul>
          {
            updating ?
              <img src={spinnergif} alt='Please wait' />
              :
              searchResult.map(show =>
                {
                  const showTracked = show.id in trackedShows;
                  return <li key={show.id}>
                    <a href={ show.url } target="_blank">{ show.name }</a>
                    <Button
                      disabled={showTracked}
                      onClick={() => this.addShow(show)}>
                      {showTracked ? 'Tracked' : 'Add'}
                    </Button>
                  </li>
                }
              )
          }
        </ul>
      </React.Fragment>
    )
  }
}

const Button = styled.button`
  background-color: ${props => props.disabled ? 'blue' : 'white'};
  color: ${props => props.disabled ? 'white' : 'black'};
`

const mapStateToProps = (state, ownProps) => {
  return {
    searchResult: state.searchResult.data,
    updating: state.searchResult.updating,
    trackedShows: state.trackedShows
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchShows: (query) => dispatch(searchShows(query)),
    trackNewShow: (show) => dispatch(trackNewShow(show))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDisplay);