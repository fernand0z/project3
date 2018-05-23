import axios from 'axios';

export const CHECK_AUTH = 'CHECK_AUTH';
export const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';


// authentication actions
export function checkAuth() {
  return {
    type: CHECK_AUTH
  }
}

export function checkAuthSuccess(user) {
  return {
    type: CHECK_AUTH_SUCCESS,
    user
  }
}

export function checkAuthFailure(error) {
  return {
    type: CHECK_AUTH_FAILURE,
    error
  }
}

// async
export function getUser() {
  return (dispatch, getState) => {
    if(getState().isAuthenticated) { return; }
    dispatch(checkAuth());
    axios.get('/api/profile')
      .then(res => res.data)
      .then(user => dispatch(checkAuthSuccess(user)))
      .catch(err => dispatch(checkAuthFailure(err)));
    }
}