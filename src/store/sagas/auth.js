import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import dateformat from 'dateformat';
import axios from "../../shared/axios-instance";

import * as actions from "../actions/index";

export function* logoutSaga(action) {
    // call function makes generators more testable
    yield call([localStorage, 'removeItem'],'token');
    yield call([localStorage, 'removeItem'],'expirationDate');
    yield call([localStorage, 'removeItem'],'userId');
    yield call([localStorage, 'removeItem'],'email');
    yield call([localStorage, 'removeItem'],'role');
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB971U3a7t7lzcepg9bZCSSJldBiz-Hhgs";
    if (!action.isSignup) {
        url =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB971U3a7t7lzcepg9bZCSSJldBiz-Hhgs";
    }
    try {
        const response = yield axios.post(url, authData);

        const expirationDate = yield new Date(
            new Date().getTime() + response.data.expiresIn * 1000
        );
        yield localStorage.setItem("token", response.data.idToken);
        yield localStorage.setItem("email", response.data.email);
        yield localStorage.setItem("expirationDate", expirationDate);
        yield localStorage.setItem("userId", response.data.localId);
        yield put(
            actions.authSuccess(response.data.idToken, response.data.localId, response.data.email)
        );
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }

    // get user role
    try {
        const response = yield axios.get('/users.json');
        const fetchedData = [];
        let role;
        for (let key in response.data) {
            fetchedData.push({
                ...response.data[key],
                id: key
            });
            if(fetchedData[key].userUUID === localStorage.getItem("userId")) {
                role = fetchedData[key].role;
                yield localStorage.setItem("role", role);
            }
        }
        yield put(actions.checkAuthRole(role));
    } catch (error) {
        // yield put(actions.fetchUseCaseFailed(error));
        console.log(error);
    }

    const dateRecorded = dateformat(new Date(), "mmmm dS yyyy");

    let newUser = {
        'accountCreatedDate': dateRecorded,
        'email': localStorage.getItem("email"),
        'name': localStorage.getItem("email"),
        profileImage: '',
        role: 'Apprentice',
        userUUID: localStorage.getItem("userId")
    };
    console.log(newUser);

    if(action.isSignup){
        try {
            const response = yield axios.patch(`/users/${action.id}.json`, newUser);
            yield put(actions.createUserSuccess(response.name, action.data))
        } catch (error) {
            yield put(actions.createUserFail(error))
        }
    }

}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem("token");
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(
            localStorage.getItem("expirationDate")
        );
        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem("userId");
            yield put(actions.authSuccess(token, userId));
            yield put(
                actions.checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                )
            );
        }
    }
}
