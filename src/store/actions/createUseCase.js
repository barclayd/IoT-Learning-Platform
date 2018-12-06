import * as actionTypes from './actionTypes';

export const createUseCaseSuccess = (data) => {
    return {
        type: actionTypes.CREATE_USECASE_SUCCESS,
        data: data
    };
};

export const createUseCaseFail = (error) => {
    return {
        type: actionTypes.CREATE_USECASE_FAIL,
        error: error
    };
};

export const createUseCaseStart = () => {
    return {
        type: actionTypes.CREATE_USECASE_START
    }
};

export const createUseCaseInit = () => {
    return {
        type: actionTypes.CREATE_USECASE_INIT
    }
};

export const createUseCase = (data) => {
    return {
        type: actionTypes.INIT_CREATE_USECASE,
        data: data
    }
};
