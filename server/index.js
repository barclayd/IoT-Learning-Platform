const {sendDataUsingWebsockets} = require('./models/websockets');
const {sendTempDataToFirebase, retrieveDataFromFirebase} = require('./models/firebase');

// sends randomly generated mock data and Arudino data to client using websockets
sendDataUsingWebsockets();
// sends randomly generated mock data to Firebase dB
sendTempDataToFirebase();
// retrieves randomly generated mock data to Firebase dB and prints to console
retrieveDataFromFirebase();


