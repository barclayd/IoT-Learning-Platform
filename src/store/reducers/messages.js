import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false,
    error: false,
    saved: true
};

const postMessageSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        saved: true
    })
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.INIT_POST_MESSAGE): return updateObject(state, {saved: false});
        case(actionTypes.POST_MESSAGE_START): return updateObject(state, {loading: true});
        case(actionTypes.POST_MESSAGE_SUCCESS): return postMessageSuccess(state, {loading: false, error: false, saved: true});
        case(actionTypes.POST_MESSAGE_FAILED): return updateObject(state, {loading: false});
        default: return state;
    }
};

export default reducer;
