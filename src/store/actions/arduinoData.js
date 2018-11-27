import * as actionTypes from './actionTypes';

import {getArduinoData} from "../../shared/serverUtility/arduinoData";


export const fetchArduinoDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ARDUINO_DATA_SUCCESS,
        tempData: data
    };
};

export const fetchArduinoDataFailed = () => {
    return {
        type: actionTypes.FETCH_ARDUINO_DATA_FAILED,
        error: true
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
        getArduinoData((data) => {
            if(!data.data || data.success === false) {
                dispatch(fetchArduinoDataFailed());
            } else {
                dispatch(fetchArduinoDataSuccess(data));
            }
            });
    }
    // return {
    //     type: actionTypes.INIT_FETCH_ARDUINO_DATA
    // }
};


