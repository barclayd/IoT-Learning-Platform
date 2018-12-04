const axios = require('../axios-instance');

let minValue;
let maxValue;
// Compose the new email
const getSensorData = () => {

    setInterval(() => {
        axios.get('/useCases.json')
            .then(response => {
                const sensorsData = response.data[0].sensorsData;
                sensorsData.forEach((sensor) => {
                    minValue = sensor.minValue;
                    maxValue = sensor.maxValue;
                    console.log(minValue);
                    console.log(maxValue);
                    return [minValue, maxValue];
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, 1000);
};

module.exports = {
    getSensorData,
    minValue,
    maxValue
};
