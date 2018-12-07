import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false,
    error: false,
    saved: true
};

const submitSettingsSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        saved: true
    })
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.INIT_UPDATE_PROFILE): return updateObject(state, {saved: false});
        case(actionTypes.UPDATE_PROFILE_START): return updateObject(state, {loading: true});
        case(actionTypes.UPDATE_PROFILE_SUCCESS): return submitSettingsSuccess(state, {loading: false, error: false, saved: true});
        case(actionTypes.UPDATE_PROFILE_FAILED): return updateObject(state, {loading: false});
        default: return state;
    }
};

export default reducer;
