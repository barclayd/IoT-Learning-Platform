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
