const dateformat = require('dateformat');
const {composeEmail} = require('./emailService');
const axios = require('../axios-instance');
const {getSensorData} = require('./sensorsService');


let obj = {};

let temperatureRange;
setInterval(() => {
    getSensorData().then((data) => {
        temperatureRange = data;
    });
}, 5000);



const sendArduinoData = (client, getUseCaseID) => {

    try {
        const five = require('johnny-five');
        const board = new five.Board();
        board.on("connect", function(event) {
            console.log("Arduino Connected!");

            board.on("ready", function() {

                const temperature = new five.Thermometer({
                    controller: "TMP36", //LM35 or TMP36
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
                    // console.log(obj);
                    client.emit('arduinoData', (obj));

                    // axios.post('/temp.json', obj)
                    //     .then(response => {
                    //         console.log(`Sensor data successfully sent to Firebase at ${dateRecorded}`);
                    //     })
                    //     .catch(error => {
                    //         console.log('An error occurred');
                    //     });
                    if (this.celsius < temperatureRange.min || this.celsius > temperatureRange.max) {
                        console.log("email sent");
                        composeEmail(getUseCaseID);
                    }
                });
            });
        });



        board.on("fail", function(event) {
                console.log("Fail message: %s", event.message);
                console.log(temperatureRange);
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

module.exports = {
    sendArduinoData
};
