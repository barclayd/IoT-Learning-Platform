import * as actionTypes from './actionTypes';

export const fetchUseCaseDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USECASE_DATA_SUCCESS,
        data: data
    };
};

export const fetchUseCaseDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_USECASE_DATA_FAILED,
        error: error
    };
};

export const fetchUseCaseDataStart = () => {
    return {
        type: actionTypes.FETCH_USECASE_DATA_START
    }
};

export const fetchUseCaseData = () => {
    return {
        type: actionTypes.INIT_FETCH_USECASE_DATA
    }
};
