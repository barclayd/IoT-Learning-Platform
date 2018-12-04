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


export const updateUseCaseDataSuccess = () => {
    return {
        type: actionTypes.UPDATE_USECASE_SUCCESS,
    };
};

export const updateUseCaseDataFailed = (error) => {
    return {
        type: actionTypes.UPDATE_USECASE_FAILED,
        error: error
    };
};

export const updateUseCaseDataStart = () => {
    return {
        type: actionTypes.UPDATE_USECASE_START
    }
};

export const updateUseCaseData = (data) => {
    return {
        type: actionTypes.INIT_UPDATE_USECASE,
        data: data
    }
};