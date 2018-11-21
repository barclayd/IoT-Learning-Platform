const {sendSensorData, retrieveData} = require('./temperatureData');

// sends data to Firebase dB every 2 seconds
const sendTempDataToFirebase = () => {
    setInterval(() => {
        sendSensorData();
    }, 2000);
};

// retrieves data from firebase asynchronously

const retrieveDataFromFirebase = () => {
    setTimeout(() => {
        retrieveData();
    }, 2000);
};

module.exports = {
    sendTempDataToFirebase,
    retrieveDataFromFirebase
};
