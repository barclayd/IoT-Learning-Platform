import * as actionTypes from './actionTypes';

export const fetchSensorsDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SENSORS_DATA_SUCCESS,
        data: data
    };
};

export const fetchSensorsDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_SENSORS_DATA_FAILED,
        error: error
    };
};

export const fetchSensorsDataStart = () => {
    return {
        type: actionTypes.FETCH_SENSORS_DATA_START
    }
};

export const fetchSensorsData = () => {
    return {
        type: actionTypes.INIT_FETCH_SENSORS_DATA
    }
};
