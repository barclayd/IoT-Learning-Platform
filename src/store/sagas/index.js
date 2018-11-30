import {takeEvery, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchDataSaga} from './historicData';
import {fetchLiveDataSaga} from './liveData';
import {fetchUseCaseSaga} from "./useCaseData";
import {fetchArduinoDataSaga} from './arduinoData';
import {checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga, logoutSaga} from './auth';

export function* watchAuth() {
    // run all simultaneously
    yield all ([
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ])
}

export function* watchHistoricData() {
    yield takeEvery(actionTypes.INIT_FETCH_DATA, fetchDataSaga);
}

export function* watchLiveData() {
    yield takeEvery(actionTypes.INIT_FETCH_LIVE_DATA, fetchLiveDataSaga);
}

export function* watchUseCaseData() {
    yield takeEvery(actionTypes.INIT_FETCH_USECASE, fetchUseCaseSaga);
}

export function* watchArduinoData() {
    yield takeEvery(actionTypes.INIT_FETCH_ARDUINO_DATA, fetchArduinoDataSaga);
}
