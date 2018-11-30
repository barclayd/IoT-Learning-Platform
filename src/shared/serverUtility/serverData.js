import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


function connectToArduino(cb) {
    console.log('connect to arduino data')
    socket.removeListener('arduinoData');
    socket.emit('connectToArduino' , socket.id);
    socket.on('arduinoData', data => cb(data));
}

function getTempData(cb) {
    socket.on('tempData', data => cb(null, data));
    socket.emit('sendTemp', 1000);
}

function getUseCaseData(cb) {
    socket.on('useCaseData', data => cb(null, data));
    socket.emit('sendUseCases', 1000);
}

export {
    getTempData,
    connectToArduino,
    getUseCaseData
};
