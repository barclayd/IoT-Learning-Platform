const five = require('johnny-five');
const fs = require('fs');
const board = new five.Board();
const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
var pin = 2;

// http://johnny-five.io/examples/temperature-tmp36/

// for Breadboard for "Thermometer - TMP36"

const getArudinoData = () => {
    console.log(1)

    board.on("connect", function(event) {
        console.log("Arduino Connected!");
    });

    board.on("ready", function() {
        var temperature = new five.Thermometer({
          controller: "TMP36",
          pin: "A0",
          freq: 2000
        });
      
        temperature.on("data", function() {
            console.log(this.celsius + "°C", this.fahrenheit + "°F");
            return {success: true, message: "temp data is here!", data: this.celsius};
        });
    });
   
    board.on("fail", function(event) {
        console.log("Fail message: %s", event.message);
        return {success: false, message: event.message, data: null};
    });


};

module.exports = {
    getArudinoData
};