import {put} from 'redux-saga/effects';
import axios from '../../shared/axios-instance';

import * as actions from '../actions/index';

export function* fetchUseCaseDataSaga(action) {
    yield put(actions.fetchUseCaseDataStart());
    try {
        const response = yield axios.get('/useCases.json');
        const fetchedData = [];
        for (let key in response.data) {
            fetchedData.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchUseCaseDataSuccess(fetchedData));
    } catch (error) {
        yield put(actions.fetchUseCaseDataFailed(error));
    }
}
