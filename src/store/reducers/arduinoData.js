import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false,
    error: true
};

const arduinoDataFetchSuccess = (state, action) => {
    return updateObject(state, {
        data: action.tempData,
        loading: false,
        error: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_ARDUINO_DATA_START): return updateObject(state, {loading: true});
        case(actionTypes.FETCH_ARDUINO_DATA_SUCCESS): return arduinoDataFetchSuccess(state, action);
        case(actionTypes.FETCH_ARDUINO_DATA_FAILED): return updateObject(state, {loading: false, error: true});
        default: return state;
    }
};

export default reducer;
