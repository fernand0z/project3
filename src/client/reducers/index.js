import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

// state shape
const state = {
  user: { exists: false, updating: false /*...user object from server*/ },
  searchResult: { updating: false, data: [] },
  trackedShows: [{id: 1, title: 'game of thrones', image: '/image.png'}],
  episodes: [],
}

function user(state = { exists: false, updating: false }, action) {
  switch(action.type) {
    case ActionTypes.CHECK_AUTH_REQUEST:
      return {...state, updating: true };
    case ActionTypes.CHECK_AUTH_SUCCESS:
      return { exists: true, updating: false, ...action.user };
    case ActionTypes.CHECK_AUTH_FAILURE:
      return { exists: false, updating: false };
    default:
      return state;
  }
}

function searchResult(state = { updating: false, data: [] }, action) {
  switch(action.type) {
    case ActionTypes.SEARCH_SHOW_REQUEST:
      return { ...state, updating: true };
    case ActionTypes.SEARCH_SHOW_SUCCESS:
      return { updating: false, data: action.data };
    case ActionTypes.SEARCH_SHOW_FAILURE:
      return { updating: false, data: [] };
    default:
      return state;
  }
}

const reducers = combineReducers({
  user,
  searchResult
});

export default reducers;