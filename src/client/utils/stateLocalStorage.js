import { debounce } from 'lodash';

const STATE_KEY = 'state';

const saveState = debounce(store => {
  const { trackedShows } = store.getState();
  const saveState = { trackedShows };
  localStorage.setItem(STATE_KEY, JSON.stringify(saveState));
}, 500);

export function persistState(store) {
  store.subscribe(() => saveState(store));
}

export function getInitialState() {
  return JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
}

export function clearStorage() {
  localStorage.setItem(STATE_KEY, null);
}