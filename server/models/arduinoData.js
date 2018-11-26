const five = require('johnny-five');
const fs = require('fs');
const board = new five.Board();
const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

// http://johnny-five.io/examples/temperature-tmp36/

// for Breadboard for "Thermometer - TMP36"

const getArudinoData = () => {
    let temperature = {};
    five.Board().on("ready", function () {
        var temperature = new five.Thermometer({
            controller: "TMP36",
            pin: "A0"
        });

        temperature.on("change", function () {
            console.log(this.celsius + "°C", this.fahrenheit + "°F");
        });
    });
};

module.exports = {
    getArudinoData
};