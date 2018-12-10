import {put} from 'redux-saga/effects';
import axios from '../../shared/axios-instance';

import * as actions from '../actions/index';

export function* fetchUsersDataSaga(action) {
    yield put(actions.fetchUsersDataStart);
    try {
        const response = yield axios.get('/users.json');
        const fetchedData = [];
        for (let key in response.data) {
            fetchedData.push({
                ...response.data[key],
                id: key
            });
        }
        const filteredFetchedData = fetchedData.filter(user => user.email !== undefined);
        yield put(actions.fetchUsersDataSuccess(filteredFetchedData));
    } catch (error) {
        yield put(actions.fetchUsersDataFailed(error));
    }
}

export function* deleteUsersSaga (action) {
    console.log(action.userName);
    yield put(actions.deleteUserStart());
    try {
        const response = yield axios.delete(`/users/${action.id}.json`);
        console.log(response);
        yield put(actions.deleteUserSuccess(action.userName));
        try {
            yield put(actions.fetchUsersDataStart);
            try {
                const response = yield axios.get('/users.json');
                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id: key
                    });
                }
                yield put(actions.fetchUsersDataSuccess(fetchedData));
            } catch (error) {
                yield put(actions.fetchUsersDataFailed(error));
            }
        } catch (error) {
            yield put(actions.deleteUserFailed(error));
        }
    } catch (error){
        yield put(actions.deleteUserFailed(error));
    }
}
