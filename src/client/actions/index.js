import { API } from '../utils/API.js';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const SEARCH_SHOW_REQUEST = 'SEARCH_SHOW_REQUEST';
export const SEARCH_SHOW_SUCCESS = 'SEARCH_SHOW_SUCCESS';
export const SEARCH_SHOW_FAILURE = 'SEARCH_SHOW_FAILURE';

export const TRACK_SHOW = 'TRACK_SHOW';
export const UNTRACK_SHOW = 'UNTRACK_SHOW';
export const UPDATE_EPISODES_REQUEST = 'UPDATE_EPISODES_REQUEST';
export const UPDATE_EPISODES_SUCCESS = 'UPDATE_EPISODES_SUCCESS';
export const UPDATE_EPISODES_FAILURE = 'UPDATE_EPISODES_FAILURE';

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  }
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user
  }
}

export function getUserFailure(error) {
  return {
    type: GET_USER_FAILURE,
    error
  }
}

export function getUser() {
  return (dispatch, getState) => {
    if(getState().user.exists) { return; }
    dispatch(getUserRequest());
    API.getUser()
      .then(res => res.data)
      .then(user => dispatch(getUserSuccess(user)))
      .catch(err => dispatch(getUserFailure(err)));
    }
}

export function searchShowRequest(query) {
  return {
    type: SEARCH_SHOW_REQUEST,
    query
  }
}

export function searchShowSuccess(data) {
  return {
    type: SEARCH_SHOW_SUCCESS,
    data
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
    API.searchShows(query)
      .then(shows => dispatch(searchShowSuccess(shows)))
      .catch(err => dispatch(searchShowFailure(err)));
  }
}

export function trackShow(show) {
  return {
    type: TRACK_SHOW,
    id: show.id,
    show
  }
}

export function untrackShow({ id }) {
  return {
    type: UNTRACK_SHOW,
    id
  }
}

export function updateEpisodesRequest({ id }) {
  return {
    type: UPDATE_EPISODES_REQUEST,
    id
  }
}

export function updateEpisodesSuccess({ id, episodes }) {
  return {
    type: UPDATE_EPISODES_SUCCESS,
    id,
    episodes
  }
}

export function updateEpisodesFailure(error) {
  return {
    type: UPDATE_EPISODES_FAILURE,
    error
  }
}

// TRACK_SHOW then UPDATE_EPISODES for that show
export function trackNewShow(show) {
  return (dispatch, getState) => {
    dispatch(trackShow(show));
    dispatch(updateEpisodesRequest(show));
    API.getEpisodes(show)
      .then(episodes => dispatch(updateEpisodesSuccess(
        {
          id: show.id,
          episodes
        }
      )))
      .catch(err => dispatch(updateEpisodesFailure(err)));
  }
}
