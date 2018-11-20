import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function getTempData(cb) {
    socket.on('tempData', data => cb(null, data));
    socket.emit('sendTemp', 1000);
}

export {
    getTempData
};
