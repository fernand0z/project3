import API from '../utils/API';

export const CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST';
export const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';

export const SEARCH_SHOW_REQUEST = 'SEARCH_SHOW_REQUEST';
export const SEARCH_SHOW_SUCCESS = 'SEARCH_SHOW_SUCCESS';
export const SEARCH_SHOW_FAILURE = 'SEARCH_SHOW_FAILURE';

// authentication actions
export function checkAuthRequest() {
  return {
    type: CHECK_AUTH_REQUEST
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
    dispatch(checkAuthRequest());
    API.getUser()
      .then(res => res.data)
      .then(user => dispatch(checkAuthSuccess(user)))
      .catch(err => dispatch(checkAuthFailure(err)));
    }
}

export function searchShowRequest(query) {
  return {
    type: SEARCH_SHOW_REQUEST,
    query
  }
}

export function searchShowSuccess(json) {
  return {
    type: SEARCH_SHOW_SUCCESS,
    json
  }
}

export function searchShowFailure(error) {
  return {
    type: SEARCH_SHOW_FAILURE,
    error
  }
}

export function searchShow(query) {
  return (dispatch) => {
    dispatch(searchShowRequest());
    API.searchShow(query)
      .then(res => console.log(res));
  }
}
