import ActionTypes from '../actions';
import API from '../utils/API';

const backendSync = store => next => action => {
  switch(action.type) {
    case ActionTypes.TRACK_SHOW: {
      API.trackShow();
    }

    case ActionTypes.UNTRACK_SHOW: {
      API
    }

    case ActionTypes.MARK_EPISODE_SEEN: {

    }

    case ActionTypes.MARK_EPISODE_UNSEEN: {

    }

    case ActionTypes.TOGGLE_EPISODE: {

    }
  }

  next(action);
}

export default backendSync;