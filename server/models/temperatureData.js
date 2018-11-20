const sensorsData = require('../data/sensorData.json');
const dateformat = require('dateformat');
const axios = require('../axios-instance');

const getRandomTemperature = (min, max) => {
    return ((Math.random() * max) + min).toFixed(1);
};

console.log(getRandomTemperature(4.5, 6));

const getTemperatures = () => {
    let temperatures = {};
    let time = new Date();
    // format date in readable format e.g. 'November 19th 2018, 10:43:48 PM'
    const timeRecorded = dateformat(time, "mmmm dS yyyy, h:MM:ss TT");
    for (let record in sensorsData) {
        // temperatures[timeRecorded] = sensorsData[record].data['fridgeTemp'];
        temperatures['fridgeTemp'] = Number.parseFloat(getRandomTemperature(sensorsData[record].data['fridgeTemp'], 6));
        temperatures['timeRecorded'] = timeRecorded;
        // temperatures[sensorsData[record].data.timeRecorded] = sensorsData[record].data['fridgeTemp'];
    }
    return temperatures;
};

const retrieveData = () => {
    let tempData;
    axios.get('/test.json')
        .then(response => {
            console.log(response.data);
            tempData = response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

const sendSensorData = () => {
    axios.post('/test.json', getTemperatures())
        .then(response => {
            console.log(`Sensor data successfully sent to Firebase at ${new Date()}`);
        })
        .catch(error => {
            console.log('An error occurred');
        })
};

module.exports = {
    retrieveData,
    sendSensorData,
    getTemperatures
};
