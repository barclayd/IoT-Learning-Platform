const five = require('johnny-five');
const fs = require('fs');
const board = new five.Board();
const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

// reference: http://johnny-five.io/examples/temperature-ds18b20/

// for Breadboard for "Thermometer - DS18B20"

const getArudinoData = () => {
    let temperature = {};
    board.on('ready', () => {
        const thermometer = new five.Thermometer({
            controller: 'DHT11_I2C_NANO_BACKPACK'
        });

        thermometer.on("change", () => {
            const currentTemp = (`${this.celsius}°C`);
            // Arduino output
            console.log(currentTemp);
            temperature['fridgeTemp'] = Number.parseFloat(currentTemp);
        });

        // writes all new temperature data to a log.txt file
        thermometer.on("data", () => {
            logStream.write(new Date().toLocaleString() + ' - ' + this.celsius + '°C\n');
        })
    });
    return temperature;
};

board.on('exit', function() {
    logStream.end('=======================================================\n');
});

module.exports = {
    getArudinoData
};
