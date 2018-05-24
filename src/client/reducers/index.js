import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

// state shape
const state = {
  isAuthenticated: false,
  user: {},
  searchResult: {}
}

function isAuthenticated(state = false, action) {
  switch(action.type) {
    case ActionTypes.CHECK_AUTH_SUCCESS:
      return true;
    case ActionTypes.CHECK_AUTH_FAILURE:
      return false;
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch(action.type) {
    case ActionTypes.CHECK_AUTH_SUCCESS:
      return action.user;
    case ActionTypes.CHECK_AUTH_FAILURE:
      console.log(action.error);
      return {};
    default:
      return state;
  }
}

const reducers = combineReducers({
  isAuthenticated,
  user
});

export default reducers;