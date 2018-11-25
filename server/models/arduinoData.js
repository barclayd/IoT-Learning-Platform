const five = require('johnny-five');
const fs = require('fs');
const board = new five.Board();
const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

// reference: http://johnny-five.io/examples/temperature-ds18b20/

// for Breadboard for "Thermometer - DS18B20"

const getArudinoData = () => {
    const five = require('johnny-five');

    const board = new five.Board();

    board.on('ready', ()=>{

        const temp = new five.Thermometer({
            pin: 'A0',
            controller: 'TMP36'
        });

        temp.on('change', ()=>{
            var tempF = temp.fahrenheit;
            console.log('Temperature: ', tempF);
        });

        // writes all new temperature data to a log.txt file
    });
};

board.on('exit', function() {
    logStream.end('=======================================================\n');
});

module.exports = {
    getArudinoData
};
