import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    sensors: [],
    loading: false,
    error: false
};

const fetchSensorsSuccess = (state, action) => {
    return updateObject(state, {
        sensors: action.data,
        loading: false,
        error: false
    })
};

const fetchSensorsFailed = (state, action) => {
    return updateObject(state, {
        users: action.data,
        loading: false,
        error: action.error
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_SENSORS_DATA_INIT): return updateObject(state, {loading: true});
        case(actionTypes.FETCH_SENSORS_DATA_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.FETCH_SENSORS_DATA_SUCCESS): return fetchSensorsSuccess(state, action);
        case(actionTypes.FETCH_SENSORS_DATA_FAILED): return fetchSensorsFailed(state, action);
        default: return state;
    }
};

export default reducer;
