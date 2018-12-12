import {takeEvery, all, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchDataSaga} from './historicData';
import {fetchLiveDataSaga} from './liveData';
import {fetchArduinoDataSaga} from './arduinoData';
import {fetchUseCaseDataSaga, updateUseCaseSaga, submitSettingsSaga, deleteUseCaseSaga} from './useCaseFirebase'
import {fetchUsersDataSaga, deleteUsersSaga} from './usersFirebase';
import {createUseCaseSaga} from './createUseCase';
import {fetchSensorsDataSaga} from './sensorsFirebase'
import {updateProfileSaga} from './userProfile';
import {postMessageSaga} from './messages'

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
    yield takeEvery(actionTypes.INIT_FETCH_HISTORIC_DATA, fetchDataSaga);
}

export function* watchLiveData() {
    yield takeEvery(actionTypes.INIT_FETCH_LIVE_DATA, fetchLiveDataSaga);
}

export function* watchArduinoData() {
    yield takeEvery(actionTypes.INIT_FETCH_ARDUINO_DATA, fetchArduinoDataSaga);
}

export function* watchUseCaseDataFirebase() {
    yield takeEvery(actionTypes.INIT_FETCH_USECASE_DATA, fetchUseCaseDataSaga);
    yield takeLatest(actionTypes.INIT_SUBMIT_SETTINGS, submitSettingsSaga);
}

export function* watchUsersDataFirebase() {
    yield takeEvery(actionTypes.INIT_FETCH_USERS_DATA, fetchUsersDataSaga);
}

export function* watchUpdateUseCaseData() {
    yield takeEvery(actionTypes.INIT_UPDATE_USECASE, updateUseCaseSaga);
}

export function* watchCreateUseCase() {
    yield takeLatest(actionTypes.INIT_CREATE_USECASE, createUseCaseSaga);
}

export function* watchSensorsData() {
    yield takeLatest(actionTypes.INIT_FETCH_SENSORS_DATA, fetchSensorsDataSaga);
}

export function* watchUpdateProfile() {
    yield takeLatest(actionTypes.INIT_UPDATE_PROFILE, updateProfileSaga);
}

export function* watchDeleteUseCase() {
    yield takeLatest(actionTypes.INIT_DELETE_USECASE, deleteUseCaseSaga);
}

export function* watchDeleteUsers() {
    yield takeLatest(actionTypes.INIT_DELETE_USER, deleteUsersSaga);
}

export function* watchMessages() {
    yield takeLatest(actionTypes.INIT_POST_MESSAGE, postMessageSaga);
}
