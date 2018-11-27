const five = require('johnny-five');
const board = new five.Board();
const port = 8001;
const io = require('socket.io')();
io.listen(port);

// http://johnny-five.io/examples/temperature-tmp36/

// for Breadboard for "Thermometer - TMP36"

const getArduinoData = async () => {

    let obj = {};
    board.on("connect", function(event) {
        console.log("Arduino Connected!");
    });

    board.on("ready", function() {
        const temperature = new five.Thermometer({
            controller: "TMP36",
            pin: "A0",
            freq: 2000
        });

        temperature.on("data", async function () {
            await console.log(temperature.celsius + "°C", temperature.fahrenheit + "°F");
            obj = {fridgeTemp: temperature.celsius};
            io.on('connection', (client) => {
                client.on('connectToArduinoData', () => {
                    console.log('Client has requested use cases data');
                    client.emit('arduinoData', (obj));
                });
            });
        });
    });

    board.on("fail", async function(event) {
            await console.log("Fail message: %s", event.message);
            obj = {error: 'Failed!'};
            io.on('connection', (client) => {
                client.on('connectToArduinoData', () => {
                    console.log('Client has requested use cases data');
                    client.emit('arduinoData', (obj));
                });
        });
    });
};




module.exports = {
    getArduinoData
};
