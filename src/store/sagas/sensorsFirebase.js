import {put} from 'redux-saga/effects';
import axios from '../../shared/axios-instance';

import * as actions from '../actions/index';

export function* fetchSensorsDataSaga(action) {
    yield put(actions.fetchSensorsDataStart());
    try {
        const response = yield axios.get('/sensors.json');
        const fetchedData = [];
        for (let key in response.data) {
            fetchedData.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchSensorsDataSuccess(fetchedData));
    } catch (error) {
        yield put(actions.fetchSensorsDataFailed(error));
    }
}
