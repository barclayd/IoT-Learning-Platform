import * as actionTypes from "./actionTypes";

export const updateProfileSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE_SUCCESS,
        data
    };
};

export const updateProfileFailed = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_FAILED,
        error: error
    };
};

export const updateProfileStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_START
    }
};

export const updateProfile = (data, id) => {
    return {
        type: actionTypes.INIT_UPDATE_PROFILE,
        data: data,
        id: id
    }
};
