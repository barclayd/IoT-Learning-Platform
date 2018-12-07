import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    loading: false,
    success: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.CREATE_USER_FAIL): return updateObject(state, {loading: false, success: false});
        case(actionTypes.CREATE_USER_SUCCESS): return updateObject(state, {loading: false, success: true});
        default: return state;
    }
};

export default reducer;
