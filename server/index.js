const axios = require('./axios-instance');
const io = require('socket.io')();
const dateformat = require('dateformat');

const sensorsData = require('./data/sensorData.json');

const getTemperatures = () => {
    let temperatures = {};
    let time = new Date();
    // format date in readable format e.g. 'November 19th 2018, 10:43:48 PM'
    const timeRecorded = dateformat(time, "mmmm dS yyyy, h:MM:ss TT");
    for (let record in sensorsData) {
        temperatures[timeRecorded] = sensorsData[record].data['fridgeTemp'];
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
