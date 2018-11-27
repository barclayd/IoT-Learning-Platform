const io = require('socket.io')();
const {getTemperatures} = require('./temperatureData');
const {getArduinoData} = require('./arduinoData');
const useCaseData = require('../data/useCases');

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

const sendDataUsingWebsockets = () => {
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
        // client.on('connectToArduinoData', () => {
        //     console.log('Client has requested use cases data');
        //     client.emit('arduinoData', getArduinoData());
        // });

    });
};

module.exports = {
    sendDataUsingWebsockets
};
