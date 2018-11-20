const five = require('johnny-five');
const fs = require('fs');
const board = new five.Board();
const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

// reference: http://johnny-five.io/examples/temperature-ds18b20/

// for Breadboard for "Thermometer - DS18B20"
board.on('ready', () => {
    const thermometer = new five.Thermometer({
        controller: 'DS18B20',
        pin: 2
    });

    thermometer.on("change", () => {
        console.log(`${this.celsius}°C`);
    });

    // writes all new temperature data to a log.txt file
    thermometer.on("data", () => {
        logStream.write(new Date().toLocaleString() + ' - ' + this.celsius + '°C\n');
    })
});

board.on('exit', function() {
    logStream.end('=======================================================\n');
});
