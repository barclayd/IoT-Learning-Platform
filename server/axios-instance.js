const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://team1-iot.firebaseio.com/'
});

module.exports = instance;
