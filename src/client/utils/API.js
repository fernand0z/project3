const axios = require('axios');

class API {
  static getUser() {
    return axios.get('api/user');
  }
}

module.exports = API;