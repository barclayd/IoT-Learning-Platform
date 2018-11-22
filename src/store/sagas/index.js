import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchDataSaga} from './historicData';

export function* watchHistoricData() {
    yield takeEvery(actionTypes.INIT_FETCH_DATA, fetchDataSaga);
}
