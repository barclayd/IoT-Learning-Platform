import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    loading: false,
    success: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.CREATE_USECASE_INIT): return updateObject(state, {loading: true});
        case(actionTypes.CREATE_USECASE_START): return updateObject(state, {loading: true});
        case(actionTypes.CREATE_USECASE_SUCCESS): return updateObject(state, {loading: false, success: true});
        case(actionTypes.CREATE_USECASE_FAIL): return updateObject(state, {loading: false, success: false});
        default: return state;
    }
};

export default reducer;
