import { connect } from 'react-redux';
import { getUser } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => dispatch(getUser)
  }
}

export default (component) => connect(
  mapStateToProps,
  mapDispatchToProps
)(component);