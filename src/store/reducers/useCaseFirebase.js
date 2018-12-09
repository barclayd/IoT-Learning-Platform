import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    data: [],
    loading: false,
    error: false,
    saved: true,
    deleted: false,
    deletedUseCase: null
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

const dataUpdateSuccess = (state, action) => {
    return updateObject(state, {
        data: action.data,
        loading: false,
        error: false,
        saved: true
    })
};
const dataUpdateFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        saved: false
    })
};

const submitSettingsSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        saved: true
    })
};

const deleteUseCaseSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        deleted: true,
        deletedUseCase: action.useCase
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.FETCH_USECASE_DATA_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.FETCH_USECASE_DATA_SUCCESS): return dataFetchSuccess(state, action);
        case(actionTypes.FETCH_USECASE_DATA_FAILED): return dataFetchFailed(state, action);
        case(actionTypes.UPDATE_USECASE_START): return updateObject(state, {loading: true, error: false, saved: false});
        case(actionTypes.UPDATE_USECASE_SUCCESS): return dataUpdateSuccess(state, action);
        case(actionTypes.UPDATE_USECASE_FAILED): return dataUpdateFailed(state, action);
        case(actionTypes.INIT_SUBMIT_SETTINGS): return updateObject(state, {saved: false});
        case(actionTypes.SUBMIT_SETTINGS_START): return updateObject(state, {loading: true});
        case(actionTypes.SUBMIT_SETTINGS_SUCCESS): return submitSettingsSuccess(state, {loading: false, error: false, saved: true});
        case(actionTypes.SUBMIT_SETTINGS_FAIL): return updateObject(state, {loading: false});
        case(actionTypes.DELETE_USECASE_START): return updateObject(state, {loading: true, error: false});
        case(actionTypes.DELETE_USECASE_SUCCESS): return deleteUseCaseSuccess(state, action);
        case(actionTypes.DELETE_USECASE_FAIL): return updateObject(state, {loading: false, error: true, deleted: false});
        default: return state;
    }
};

export default reducer;
