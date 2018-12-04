const axios = require('../axios-instance');

const getSensorData = async () => {
    let minValue;
    let maxValue;
    let temperatureRange;
    try{
        const sensorData = await axios.get('/useCases.json');
        const [sensorPromise] = await Promise.all([sensorData]);
        const sensorsData = sensorPromise.data[0].sensorsData;
        const data = await sensorsData.forEach((sensor) => {
            minValue = sensor.minValue;
            maxValue = sensor.maxValue;
        });
        temperatureRange = {
            min: minValue,
            max: maxValue
        }
    } catch (e) {
        console.log(e);
    }
    return temperatureRange
};

getSensorData().then((data) => {
    return data;
});

module.exports = {
    getSensorData
};
