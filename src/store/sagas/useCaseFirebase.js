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

export function* submitSettingsSaga(action) {
    yield put(actions.submitSettingsStart());
    try {
        const response = yield axios.patch(`/useCases/${action.useCaseId}.json`, action.data);
        yield put(actions.submitSettingsSuccess(response.data));
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
    } catch (error) {
        yield put(actions.submitSettingsFail(error))
    }
}


export function* updateUseCaseSaga (action) {
    yield put(actions.updateUseCaseDataStart());
    try {
        const response = yield axios.put('/useCases.json', action.data);
        yield put(actions.updateUseCaseDataSuccess(response.data))
    } catch (error){
        yield put(actions.updateUseCaseDataFailed(error));
    }
}

export function* deleteUseCaseSaga (action) {
    yield put(actions.deleteUseCaseStart());
    try {
        const response = yield axios.delete(`/useCases/${action.id}.json`);
        console.log(response);
        yield put(actions.deleteUseCaseSuccess(action.useCase));
        try {
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
        } catch (error) {
            yield put(actions.fetchUseCaseDataFailed(error));
        }
    } catch (error){
        yield put(actions.deleteUseCaseFailed(error));
    }
}
