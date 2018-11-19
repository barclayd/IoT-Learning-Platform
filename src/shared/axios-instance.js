import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://team1-iot.firebaseio.com/'
});

export default instance;
