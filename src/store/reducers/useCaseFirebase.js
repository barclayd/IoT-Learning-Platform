import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false,
    error: false
};

const dataFetchSuccess = (state, action) => {
    return updateObject(state, {
        data: action.data,
        loading: false,
        error: false
    })
};

const dataFetchFailed = (state, action) => {
    return updateObject(state, {
        data: action.data,
        loading: false,
        error: action.error
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_USECASE_DATA_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.FETCH_USECASE_DATA_SUCCESS): return dataFetchSuccess(state, action);
        case(actionTypes.FETCH_USECASE_DATA_FAILED): return dataFetchFailed(state, action);
        default: return state;
    }
};

export default reducer;
