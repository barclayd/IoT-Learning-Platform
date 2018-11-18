import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function getSampleData(cb) {
    socket.on('objectKeys', key => cb(null, key));
    socket.emit('sendData', 1000);
}

export {
    getSampleData
};