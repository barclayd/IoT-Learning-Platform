const {sendDataUsingWebsockets} = require('./models/websockets');
const {sendTempDataToFirebase, retrieveDataFromFirebase} = require('./models/firebase');
const {composeEmail} = require('./models/emailService');

// sends randomly generated mock data and Arudino data to client using websockets
sendDataUsingWebsockets();
// sends randomly generated mock data to Firebase dB
// sendTempDataToFirebase();
// retrieves randomly generated mock data to Firebase dB and prints to console
// retrieveDataFromFirebase();

// send test email
// composeEmail("Test Email", `<p>Warning: fridge has reached a critical level of 50C</p>`)

