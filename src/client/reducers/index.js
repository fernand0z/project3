import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

// state shape
const state = {
  user: { exists: false, updating: false /*...user object from server*/ },
  search: { updating: false, data: [] },
  trackedShows: [],
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

const reducers = combineReducers({
  user
});

export default reducers;