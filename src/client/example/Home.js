import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router'

class Home extends React.PureComponent {

  render() {
    const { user } = this.props;

    return user.exists ? (
      <Redirect to="/me" />
    ) : (
      <h1><a href="/login/google">Log in with Google</a></h1>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);