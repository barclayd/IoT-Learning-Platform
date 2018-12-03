import * as actionTypes from './actionTypes';

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_HISTORIC_DATA_SUCCESS,
        historicData: data
    };
};

export const fetchDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_HISTORIC_DATA_FAILED,
        error: error
    };
};

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_HISTORIC_DATA_START
    }
};

export const fetchData = () => {
    return {
        type: actionTypes.INIT_FETCH_HISTORIC_DATA
    }
};
