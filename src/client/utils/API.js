import axios from 'axios';

export default class API {
  static getUser() {
    return axios.get('api/user');
  }

  static searchShows(query) {
    return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.data)
      .then(data => data.map(entry => entry.show));
  }

  static getEpisodes({ id }) {
    return axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
      .then(res => res.data)
      .then(episodes =>  mapToIds(episodes));
  }
}

function mapToIds(arr) {
  return arr.reduce((map, obj) => {
    map[obj.id] = obj;
    return map;
  }, {});
}