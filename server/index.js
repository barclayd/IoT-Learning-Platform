// import {retrieveData, sendSensorData, getTemperatures} from './models/temperatureData';
const io = require('socket.io')();
const {getTemperatures, retrieveData} = require('./models/temperatureData');
const {getArudinoData} = require('./models/arduinoData');
const useCaseData = require('./data/useCases');

// separate out logic from index.js and put this in models/websockets.js
io.on('connection', (client) => {
    client.on('sendTemp', () => {
        console.log('Client has requested temperature');
        setInterval(() => {
            client.emit('tempData', getTemperatures());
        }, 2000)
    });
    client.on('sendUseCases', () => {
        console.log('Client has requested use cases data');
        client.emit('useCaseData', useCaseData);
    });
    client.on('sendArduinoData', () => {
        console.log('Client has requested use cases data');
        client.emit('arduinoData', getArudinoData());
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

// separate out logic from index.js and put this in models/sentData.js


// sends data to Firebase dB every 2 seconds
// setInterval(() => {
//     sendSensorData();
// }, 2000);

// separate out logic from index.js and put this in models/retrieveData.js


// retrieves data from firebase asynchronously
setTimeout(() => {
    retrieveData();
}, 2000);
