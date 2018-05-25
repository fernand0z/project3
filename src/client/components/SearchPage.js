import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchShows, trackNewShow } from '../actions';

class SearchPage extends React.PureComponent {
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
  }

  render() {
    const { query } = this.state;
    let { searchResult, updating, trackedShows } = this.props;
    // convert object to array
    trackedShows = Object.values(trackedShows);
    return (
      <div>
        <h1>SearchPage</h1>
        <input type="text"
          value={ query }
          onChange={ this.handleChange }
        />
        <ul>
          {
            updating ?
              <h3>PUT SPINNER HERE</h3> :
              searchResult.map(show =>
                (
                  <p key={ show.id }>
                    <a href={ show.url } target="_blank">{ show.name }</a>
                    <button
                      onClick={() => this.addShow(show)}>
                      Add
                    </button>
                  </p>
                )
              )
          }
        </ul>

        {trackedShows.map(show => {
          // const show = kv[1];
          return <p key={show.id}>{show.name} has {Object.keys(show.episodes).length} episodes</p>
        })}
      </div>
    )
  }
}

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
)(SearchPage);