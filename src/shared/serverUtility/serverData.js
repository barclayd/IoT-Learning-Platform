import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function getTempData(cb) {
    socket.on('tempData', data => cb(null, data));
    socket.emit('sendTemp', 1000);
}

function getUseCaseData(cb) {
    socket.on('useCaseData', data => cb(null, data));
    socket.emit('sendUseCases', 1000);
}

function getArduinoData(cb) {
    socket.on('arduinoData', data => cb(null, data));
    socket.emit('connectToArduinoData', 1000);
}

export {
    getTempData,
    getUseCaseData,
    getArduinoData
};
