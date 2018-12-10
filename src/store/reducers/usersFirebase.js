import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    users: [],
    loading: false,
    error: false,
    deleted: true,
    deletedUser: ''
};

const dataFetchSuccess = (state, action) => {
    return updateObject(state, {
        users: action.data,
        loading: false,
        error: false
    })
};

const dataFetchFailed = (state, action) => {
    return updateObject(state, {
        users: action.data,
        loading: false,
        error: action.error
    })
};

const deleteUserSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        deleted: true,
        deletedUser: action.data
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_USERS_DATA_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.FETCH_USERS_DATA_SUCCESS): return dataFetchSuccess(state, action);
        case(actionTypes.FETCH_USERS_DATA_FAILED): return dataFetchFailed(state, action);
        case(actionTypes.DELETE_USER_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.DELETE_USER_SUCCESS): return deleteUserSuccess(state, action);
        case(actionTypes.DELETE_USER_FAIL): return dataFetchFailed(state, {loading: false, error: true});
        default: return state;
    }
};

export default reducer;
