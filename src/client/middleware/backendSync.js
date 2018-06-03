import * as ActionTypes from '../actions';
import API from '../utils/API';

const backendSync = store => next => action => {
  next(action);

  switch(action.type) {
    case ActionTypes.TRACK_SHOW: {
      API.trackShow({ id: action.id });
      break;
    }

    case ActionTypes.UNTRACK_SHOW: {
      API.untrackShow({ id: action.id });
      break;
    }

    case ActionTypes.MARK_EPISODE_SEEN:
    case ActionTypes.MARK_EPISODE_UNSEEN:
    case ActionTypes.TOGGLE_EPISODE: {
      const state = store.getState();
      const { showId, episodeId } = action;
      const watchedEpisodes = state.trackedShows[showId];
      const seen = watchedEpisodes.includes(episodeId);
      API.markEpisode({ showId, episodeId, seen });
      break;
    }
  }

}

export default backendSync;