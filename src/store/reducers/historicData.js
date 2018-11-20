import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false
};

const dataFetchSuccess = (state, action) => {
    return updateObject(state, {
        data: action.historicData,
        loading: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_DATA_START): return updateObject(state, {loading: true});
        case(actionTypes.FETCH_DATA_SUCCESS): return dataFetchSuccess(state, action);
        case(actionTypes.FETCH_DATA_FAILED): return updateObject(state, {loading: false});
        default: return state;
    }
};

export default reducer;
