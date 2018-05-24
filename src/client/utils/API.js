const axios = require('axios');

class API {
  static getUser() {
    return axios.get('api/user');
  }

  static searchShow(query) {
    return axios.get('http://api.tvmaze.com/search/shows?q=' + query);
  }
}

module.exports = API;