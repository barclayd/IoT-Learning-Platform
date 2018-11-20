import * as actionTypes from './actionTypes';

import {getTempData} from "../../shared/serverUtility/serverData";


export const fetchLiveDataSuccess = (data) => {
    console.log(data);
    return {
        type: actionTypes.FETCH_LIVE_DATA_SUCCESS,
        tempData: data
    };
};

export const fetchLiveDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_LIVE_DATA_FAILED,
        error: error
    };
};

export const fetchLiveDataStart = () => {
    return {
        type: actionTypes.FETCH_LIVE_DATA_START
    }
};

export const fetchLiveData = () => {
    return dispatch => {
        dispatch(fetchLiveDataStart());
            getTempData((err, data) => {
                dispatch(fetchLiveDataSuccess(data));
            })
    }
};
