import { connect } from 'react-redux';
import { searchShow } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResult: state.searchResult.data,
    updating: state.searchResult.updating
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchShows: (query) => dispatch(searchShow(query))
  }
}

export default (component) => connect(
  mapStateToProps,
  mapDispatchToProps
)(component);