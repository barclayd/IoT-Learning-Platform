import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    email: null,
    authRedirect: '/dashboard',
    role: ''
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        email: action.email,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
};

const authRole = (state, action) => {
    return updateObject(state, {
        role: action.role,
    })
};

const authRedirect = (state, action) => {
    return updateObject(state, {
        authRedirect: action.path
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_ROLE: return authRole(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return authRedirect(state, action);
        default: return state;
    }
};

export default reducer;
