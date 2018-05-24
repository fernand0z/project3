import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import API from '../utils/API';

class SearchPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { query: '' , shows: [] }
    this.searchShows = debounce(this.searchShows, 500);
  }

  searchShows(query) {
    API.searchShows(query)
      .then(shows => this.setState({ shows }));
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.searchShows(e.target.value);
  }

  render() {
    const { shows, query } = this.state;

    return (
      <div>
        <h1>SearchPage</h1>
        <input type="text"
          value={ query }
          onChange={ this.handleChange }
          onKeyPress={ this.handlePress } />
        <ul>
          {shows.map(s => (
            <p key={s.id}>
              <a href={s.url} target="_blank">{s.name}</a>
            </p>)
          )}
        </ul>
      </div>
    )
  }
}

export default SearchPage;