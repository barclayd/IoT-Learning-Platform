import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    useCases: [],
    loading: false,
    error: true
};

const liveUseCaseFetchSuccess = (state, action) => {
    return updateObject(state, {
        useCases: action.useCase,
        loading: false,
        error: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_USECASE_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.FETCH_USECASE_SUCCESS): return liveUseCaseFetchSuccess(state, action);
        case(actionTypes.FETCH_USECASE_FAILED): return updateObject(state, {loading: false, error: true});
        default: return state;
    }
};

export default reducer;
