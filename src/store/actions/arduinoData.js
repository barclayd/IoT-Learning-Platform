import * as actionTypes from './actionTypes';

import {getArduinoData} from "../../shared/serverUtility/serverData";


export const fetchArduinoDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ARDUINO_DATA_SUCCESS,
        tempData: data
    };
};

export const fetchArduinoDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_ARDUINO_DATA_FAILED,
        error: error
    };
};

export const fetchArduinoDataStart = () => {
    return {
        type: actionTypes.FETCH_ARDUINO_DATA_START
    }
};

export const fetchArduinoData = () => {
    return dispatch => {
        dispatch(fetchArduinoDataStart());
        getArduinoData((err, data) => {
            
            dispatch(fetchArduinoDataSuccess(data));
        })
    }
    // return {
    //     type: actionTypes.INIT_FETCH_ARDUINO_DATA
    // }
};
