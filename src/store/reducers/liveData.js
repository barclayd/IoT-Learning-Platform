import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false,
    error: false
};

const liveDataFetchSuccess = (state, action) => {
    return updateObject(state, {
        data: action.tempData,
        loading: false,
        error: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_LIVE_DATA_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.FETCH_LIVE_DATA_SUCCESS): return liveDataFetchSuccess(state, action);
        case(actionTypes.FETCH_LIVE_DATA_FAILED): return updateObject(state, {loading: false, error: true});
        default: return state;
    }
};

export default reducer;
