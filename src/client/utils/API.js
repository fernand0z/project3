const axios = require('axios');

class API {
  static getUser() {
    return axios.get('api/user');
  }

  static searchShows(query) {
    return axios.get('http://api.tvmaze.com/search/shows?q=' + query)
      .then(res => res.data)
      .then(data => data.map(entry => entry.show));
  }
}

module.exports = API;