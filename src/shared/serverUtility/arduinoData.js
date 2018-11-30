import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8001');


function getArduinoData(cb) {
    socket.on('arduinoData', data => cb(data));
    socket.emit('connectToArduinoData', 1000);
}

export {
    getArduinoData
};
