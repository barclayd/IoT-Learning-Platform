const io = require('./websockets');
const dateformat = require('dateformat');
const {composeEmail} = require('./emailService');
const axios = require('../axios-instance');

// http://johnny-five.io/examples/temperature-tmp36/

// for Breadboard for "Thermometer - TMP36"

const temperatureRange = {min: 2, max: 22};

let obj = {};


const sendArduinoData = (client) => {

    try {
        const five = require('johnny-five');
        const board = new five.Board();
        board.on("connect", function(event) {
            console.log("Arduino Connected!");

            board.on("ready", function() {

                const temperature = new five.Thermometer({
                    controller: "TMP36",
                    pin: "A0",
                    freq: 4000
                });
                temperature.on("data", function () {
                    // await console.log(temperature.celsius.toFixed(1) + "°C", temperature.fahrenheit + "°F");
                    let dateRecorded = dateformat(new Date(), "mmmm dS yyyy");
                    obj = {success: true,
                            message: "temp data is here!",
                            data: this.celsius,
                            timeRecorded: dateformat(new Date(), "h:MM:ss TT"),
                            dateRecorded: dateRecorded
                        };
                    console.log(obj);
                    client.emit('arduinoData', (obj));

                    axios.post('/temp.json', obj)
                        .then(response => {
                            console.log(`Sensor data successfully sent to Firebase at ${dateRecorded}`);
                        })
                        .catch(error => {
                            console.log('An error occurred');
                        });
                    if (this.celsius < temperatureRange.min || this.celsius > temperatureRange.max) {
                        composeEmail("Warning Email", `<p>Fridge has reached a critical level ${this.celsius}</p>`)
                    }
                });
            });
        });



        board.on("fail", function(event) {
                console.log("Fail message: %s", event.message);
                obj = {success: false, message: event.message, data: null};
                client.emit('arduinoData', (obj));
        });

        board.on("exit", function() {
            console.log("Exit board");
        });
    }
    catch (error){
        console.log(error);
        obj = {success: false, message: "No connected device found", data: null};
        client.emit('arduinoData', (obj));
    }

};



// const getArduinoData = async () => {

//     board.on("connect", function(event) {
//         console.log("Arduino Connected!");
//     });

//     board.on("ready", async function() {
//         const temperature = new five.Thermometer({
//             controller: "LM35",
//             pin: "A0",
//             freq: 2000
//         });

//         await temperature.on("data", async function () {
//             await console.log(temperature.celsius.toFixed(1) + "°C", temperature.fahrenheit + "°F");
//             // const dateRecorded = dateformat(new Date(), "h:MM:ss TT");
//             obj = {success: true, message: "temp data is here!", data: this.celsius};
//             io.on('connection', (client) => {
//                 client.on('connectToArduinoData', () => {
//                     let timeRecorded;
//                     let dateRecorded;
//                     console.log('Client has requested arduino temp data');
//                     setInterval(() => {
//                         timeRecorded = dateformat(new Date(), "h:MM:ss TT");
//                         dateRecorded = dateformat(new Date(), "mmmm dS yyyy");
//                         obj = {...obj, 'timeRecorded': timeRecorded, 'dateRecorded': dateRecorded};
//                         client.emit('arduinoData', (obj));
//                     }, 2000);
//                 });
//             });
//             // await axios.post('/temp.json', obj)
//             //     .then(response => {
//             //         console.log(`Sensor data successfully sent to Firebase at ${dateRecorded}`);
//             //     })
//             //     .catch(error => {
//             //         console.log('An error occurred');
//             //     });
//             // if (this.celsius < temperatureRange.min || this.celsius > temperatureRange.max) {
//             //     await composeEmail("Warning Email", `<p>Fridge has reached a critical level ${this.celsius}</p>`)
//             // }
//         });
//     });

//     board.on("fail", async function(event) {
//         board.on("connect", function(event) {
//             console.log("Arduino Connected!");
//         });
//             await console.log("Fail message: %s", event.message);
//             obj = {success: false, message: event.message, data: null};
//             io.on('connection', (client) => {
//                 console.log(obj);
//                 setInterval(() => {
//                     client.emit('arduinoData', (obj));
//                 }, 2000)
//                 });
//         });
// };



module.exports = {
    // getArduinoData,
    sendArduinoData
};
