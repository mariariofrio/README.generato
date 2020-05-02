const axios = require("axios");

const api = {
  getUser: function(username) {
    return axios({
    method: "get",
    url: `https://api.github.com/users/${username}`,
  })
  }
};

module.exports = api;
