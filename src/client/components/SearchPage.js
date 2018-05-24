import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import API from '../utils/API';

class SearchPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { query: '' }
    this.searchShows = debounce(props.searchShows, 500);
  }

  // searchShows(query) {
  //   API.searchShows(query)
  //     .then(shows => this.setState({ shows }));
  // }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.searchShows(e.target.value);
  }

  render() {
    const { query } = this.state;
    const { searchResult } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>SearchPage</h1>
        <input type="text"
          value={ query }
          onChange={ this.handleChange }
          onKeyPress={ this.handlePress } />
        <ul>
          {searchResult.map(s => (
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