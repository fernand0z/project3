import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import API from '../utils/API';
import withSearchShows from '../containers/withSearchShows';

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

  render() {
    const { query } = this.state;
    const { searchResult, updating } = this.props;

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
                  </p>
                )
              )
          }
        </ul>
      </div>
    )
  }
}

export default withSearchShows(SearchPage);