import * as actionTypes from './actionTypes';

import {getArduinoData} from "../../shared/serverUtility/arduinoData";
import {connectToArduino} from "../../shared/serverUtility/serverData";



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

export const fetchArduinoData = (useCaseID) => {
    return dispatch => {
        dispatch(fetchArduinoDataStart());
        console.log(useCaseID);
        connectToArduino((data) => {
            if(!data.data || data.success === false) {
                dispatch(fetchArduinoDataFailed());
            } else {
                dispatch(fetchArduinoDataSuccess(data));
            }
            }, useCaseID);
    }
    // return {
    //     type: actionTypes.INIT_FETCH_ARDUINO_DATA
    // }
};


