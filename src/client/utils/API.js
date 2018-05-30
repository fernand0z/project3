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
    return axios.get('api/user');
  }

  static searchShows(query) {
    return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.data)
      .then(data => data.map(entry => entry.show))
  }

  static getEpisodes({ id }) {
    return axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
      .then(res => res.data)
      .then(mapToIds);
  }
}

function mapToIds(arr) {
  return arr.reduce((map, obj) => {
    map[obj.id] = obj;
    return map;
  }, {});
}