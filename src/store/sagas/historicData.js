import {put} from 'redux-saga/effects';
import axios from '../../shared/axios-instance';

import * as actions from '../actions/index';

export function* fetchDataSaga(action) {
    yield put(actions.fetchDataStart());
    try {
        const response = yield axios.get(`/temp.json?auth=${localStorage.getItem('token')}`);
        const fetchedData = [];
        for (let key in response.data) {
            fetchedData.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchDataSuccess(fetchedData));
    } catch (error) {
        yield put(actions.fetchDataFailed(error));
    }
}
