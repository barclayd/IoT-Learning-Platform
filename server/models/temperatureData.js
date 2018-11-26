const sensorsData = require('../data/sensorData.json');
const dateformat = require('dateformat');
const axios = require('../axios-instance');
const {getArudinoData} = require('./arduinoData');
const {composeEmail} = require('./emailService');


const getRandomTemperature = (min, max) => {
    return ((Math.random() * max) + min).toFixed(1);
};

const temperatureRange = {min: 2, max: 8};

const getTemperatures = () => {
    let temperatures = {};
    let time = new Date();
    // format date in readable format e.g. 'November 19th 2018, 10:43:48 PM'
    const dateRecorded = dateformat(time, "mmmm dS yyyy");
    const timeRecorded = dateformat(time, "h:MM:ss TT");
    for (let record in sensorsData) {
        // temperatures[timeRecorded] = sensorsData[record].data['fridgeTemp'];
        temperatures['fridgeTemp'] = Number.parseFloat(getRandomTemperature(sensorsData[record].data['fridgeTemp'], 4));
        temperatures['timeRecorded'] = timeRecorded;
        temperatures['dateRecorded'] = dateRecorded;
        // temperatures[sensorsData[record].data.timeRecorded] = sensorsData[record].data['fridgeTemp'];
        if (temperatures['fridgeTemp'] < temperatureRange.min || temperatures['fridgeTemp'] > temperatureRange.max) {
            composeEmail("Warning Email", `<p>Fridge has reached a critical level ${temperatures['fridgeTemp']}</p>`)
        }
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

const retrieveArduinodata = () => {
    let tempData;
    axios.get('/temp.json')
        .then(response => {
            console.log(response.data);
            tempData = response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

const sendSensorData = () => {
    const dateRecorded = dateformat(new Date(), "h:MM:ss TT");
    axios.post('/test.json', getTemperatures())
        .then(response => {
            console.log(`Sensor data successfully sent to Firebase at ${dateRecorded}`);
        })
        .catch(error => {
            console.log('An error occurred');
        })
};

const sendArduinoData = () => {
    const dateRecorded = dateformat(new Date(), "h:MM:ss TT");
    axios.post('/temp.json', getArudinoData())
        .then(response => {
            console.log(`Arduino data successfully sent to Firebase at ${dateRecorded}`);
        })
        .catch(error => {
            console.log('An error occurred');
        })
};

module.exports = {
    retrieveData,
    sendSensorData,
    sendArduinoData,
    retrieveArduinodata,
    getTemperatures
};
