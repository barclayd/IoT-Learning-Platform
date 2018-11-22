import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchDataSaga} from './historicData';
import {fetchLiveDataSaga} from './liveData';
import {fetchUseCaseSaga} from "./useCaseData";
import {fetchArduinoDataSaga} from './arduinoData';

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
