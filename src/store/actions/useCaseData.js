import * as actionTypes from './actionTypes';

import {getUseCaseData} from "../../shared/serverUtility/serverData";

export const fetchUseCaseSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USECASE_SUCCESS,
        useCase: data
    };
};

export const fetchUseCaseFailed = (error) => {
    return {
        type: actionTypes.FETCH_USECASE_FAILED,
        error: error
    };
};

export const fetchUseCaseStart = () => {
    return {
        type: actionTypes.FETCH_USECASE_START
    }
};

export const fetchUseCase = () => {
    return dispatch => {
        dispatch(fetchUseCaseStart());
        getUseCaseData((err, data) => {
            dispatch(fetchUseCaseSuccess(data));
        })
    }
    // return {
    //     type: actionTypes.INIT_FETCH_USECASE
    // }
};
