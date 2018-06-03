import * as ActionTypes from '../actions';
import API from '../utils/API';

const backendSync = store => next => action => {
  next(action);

  switch(action.type) {
    case ActionTypes.TRACK_SHOW: {
      API.trackShow({ id: action.id });
    }

    case ActionTypes.UNTRACK_SHOW: {
      API.untrackShow({ id: action.id });
    }

    case ActionTypes.MARK_EPISODE_SEEN: {
      API.
    }

    case ActionTypes.MARK_EPISODE_UNSEEN: {

    }

    case ActionTypes.TOGGLE_EPISODE: {

    }
  }

}

export default backendSync;