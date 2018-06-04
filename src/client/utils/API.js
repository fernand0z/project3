import axios from 'axios';

// if status is 429, retry after a delay.
axios.interceptors.response.use(undefined, err => {
  if(err.status === 429) {
    return new Promise(resolve => {
      setTimeout(() => resolve(axios(err.config)), 1000);
    });
  } else {
    return Promise.reject(err);
  }
});

export default class API {
  static getUser() {
    return axios.get('/api/user');
  }

  static getUserShows() {
    return axios.get('/api/user/shows')
      .then(res => res.data);
  }

  static searchShows(query) {
    return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.data)
      .then(data => data.map(entry => entry.show));
  }

  static getShow({ id }) {
    return axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.data)
      .then(show => {
        show.episodes = mapToIds(show._embedded.episodes);
        delete show._embedded;
        return show;
      });
  }

  static getEpisodes({ id }) {
    return axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
      .then(res => res.data)
      .then(mapToIds);
  }

  static trackShow({ id }) {
    return axios.post(`/api/user/shows/${id}`);
  }

  static untrackShow({ id }) {
    return axios.delete(`/api/user/shows/${id}`);
  }

  static markEpisode({ showId, episodeId, seen }) {
     return axios.patch(
      `/api/user/shows/${showId}/episode/${episodeId}`,
      { seen }
    );
  }

  static markEpisodeSeen({ showId, episodeId }) {
    return markEpisode({ showId, episodeId, seen: true });
  }

  static markEpisodeUnseen({ showId, episodeId }) {
    return markEpisode({ showId, episodeId, seen: false });
  }
}

function mapToIds(arr) {
  return arr.reduce((map, obj) => {
    map[obj.id] = obj;
    return map;
  }, {});
}