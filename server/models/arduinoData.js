const five = require('johnny-five');
const fs = require('fs');
const board = new five.Board();
const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

// reference: http://johnny-five.io/examples/temperature-ds18b20/

// for Breadboard for "Thermometer - DS18B20"

const getArudinoData = () => {
    let temperature = {};
    board.on('ready', () => {
        const multi = new five.Multi({
            controller: 'DHT11_I2C_NANO_BACKPACK'
        });

        multi.on("change", () => {
            const currentTemp = (`${this.thermometer.celsius}°C`);
            console.log("  celsius           : ", this.thermometer.celsius);
            temperature['fridgeTemp'] = Number.parseFloat(currentTemp);
        });

        // writes all new temperature data to a log.txt file
        multi.on("data", () => {
            logStream.write(new Date().toLocaleString() + ' - ' + this.thermometer.celsius + '°C\n');
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
