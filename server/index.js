// import {retrieveData, sendSensorData, getTemperatures} from './models/temperatureData';
const io = require('socket.io')();
const {sendSensorData, getTemperatures, retrieveData} = require('./models/temperatureData');


io.on('connection', (client) => {
    client.on('sendTemp', () => {
        console.log('Client has requested temperature');
        client.emit('tempData', getTemperatures());
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
sendSensorData();

setTimeout(() => {
    retrieveData();
}, 3000);
