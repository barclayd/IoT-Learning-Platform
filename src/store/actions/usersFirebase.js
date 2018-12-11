import * as actionTypes from './actionTypes';

export const fetchUsersDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USERS_DATA_SUCCESS,
        data: data
    };
};

export const fetchUsersDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_USERS_DATA_FAILED,
        error: error
    };
};

export const fetchUsersDataStart = () => {
    return {
        type: actionTypes.FETCH_USERS_DATA_START
    }
};

export const fetchUsersData = () => {
    return {
        type: actionTypes.INIT_FETCH_USERS_DATA
    }
};

export const deleteUserSuccess = (data) => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
        data
    };
};

export const deleteUserFailed = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error
    };
};

export const deleteUserStart = () => {
    return {
        type: actionTypes.DELETE_USER_START
    }
};

export const deleteUser = (id, userName) => {
    return {
        type: actionTypes.INIT_DELETE_USER,
        id: id,
        userName: userName
    }
};

