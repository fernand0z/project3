import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';
import { omit } from 'lodash';

// state shape
const stateShape = {
  user: { exists: false, updating: false /*...user object from server*/ },
  searchResult: { updating: false, data: [] },
  trackedShows: {
    '[id]': {
      id: 'num',
      name: 'game of thrones',
      image: {},
      updating: false,
      episodes: { '[id]': {} },
      watchedEpisodes: ['list of episode ids']
    }
  },
}

function user(state = { exists: false, updating: false }, action) {
  switch(action.type) {
    case ActionTypes.GET_USER_REQUEST:
      return {...state, updating: true };
    case ActionTypes.GET_USER_SUCCESS:
      return { exists: true, updating: false, ...action.user };
    case ActionTypes.GET_USER_FAILURE:
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

function trackedShows(state = {}, action) {
  switch(action.type) {
    case ActionTypes.TRACK_SHOW: {
      const newShow = {
        ...action.show,
        updating: false,
        episodes: {},
        watchedEpisodes: []
      }

      return {
        ...state,
        [action.id]: newShow
      }
    }

    case ActionTypes.UNTRACK_SHOW:
      return omit(state, action.id);

    case ActionTypes.UPDATE_EPISODES_REQUEST: {
      const updatedShow = {
        ...state[action.id],
        updating: true
      }

      return {
        ...state,
        [action.id]: updatedShow
      }
    }

    case ActionTypes.UPDATE_EPISODES_SUCCESS: {
      const updatedShow = {
        ...state[action.id],
        updating: false,
        episodes: action.episodes
      }

      return {
        ...state,
        [action.id]: updatedShow
      }
    }

    case ActionTypes.UPDATE_EPISODES_FAILURE: {
      const updatedShow = {
        ...state[action.id],
        updating: false,
        episodes: {}
      }

      return {
        ...state,
        [action.id]: updatedShow
      }
    }

    case ActionTypes.MARK_EPISODE_SEEN: {
      const show = state[action.showId];
      const newWatched = new Set(show.watchedEpisodes);
      newWatched.add(action.episodeId);

      const updatedShow = {
        ...show,
        watchedEpisodes: [...newWatched]
      }

      return {
        ...state,
        [action.showId]: updatedShow
      }
    }

    case ActionTypes.MARK_EPISODE_UNSEEN: {
      const show = state[action.showId];
      const newWatched = new Set(show.watchedEpisodes);
      newWatched.delete(action.episodeId);

      const updatedShow = {
        ...show,
        watchedEpisodes: [...newWatched]
      }

      return {
        ...state,
        [action.showId]: updatedShow
      }
    }

    case ActionTypes.TOGGLE_EPISODE: {
      const show = state[action.showId];
      const newWatched = new Set(show.watchedEpisodes);
      if(!newWatched.delete(action.episodeId)) {
        newWatched.add(action.episodeId);
      }

      const updatedShow = {
        ...show,
        watchedEpisodes: [...newWatched]
      }

      return {
        ...state,
        [action.showId]: updatedShow
      }
    }

    default:
      return state;

  }
}

const reducers = combineReducers({
  user,
  searchResult,
  trackedShows
});

export default reducers;