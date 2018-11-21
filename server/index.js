// import {retrieveData, sendSensorData, getTemperatures} from './models/temperatureData';
const io = require('socket.io')();
const {getTemperatures, retrieveData} = require('./models/temperatureData');
const useCaseData = require('./data/useCases');


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
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
// sends data to Firebase dB every 2 seconds
// setInterval(() => {
//     sendSensorData();
// }, 2000);

// retrieves data from firebase asynchronously
setTimeout(() => {
    retrieveData();
}, 2000);
