const io = require('socket.io')();

const sensorsData = require('./data/sensorData.json');

const getTemperatures = () => {
    let temperatures = {};
    for (let record in sensorsData) {
        temperatures[sensorsData[record].data.timeRecorded] = sensorsData[record].data['fridgeTemp'];
    }
    return temperatures;
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
