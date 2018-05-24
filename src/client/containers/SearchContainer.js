import { connect } from 'react-redux';
import { searchShow } from '../actions';
import SearchPage from '../components/SearchPage';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResult: state.searchResult
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchShows: (query) => dispatch(searchShow(query))
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default SearchContainer;