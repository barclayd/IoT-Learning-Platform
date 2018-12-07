import * as actionTypes from "./actionTypes";

export const createUserSuccess = (data) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        data: data
    };
};

export const createUserFail = (error) => {
    return {
        type: actionTypes.CREATE_USER_FAIL,
        error: error
    };
};
