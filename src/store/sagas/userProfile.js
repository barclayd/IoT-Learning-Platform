import {put} from 'redux-saga/effects';
import * as actions from "../actions";
import axios from "../../shared/axios-instance";

export function* updateProfileSaga(action) {
    yield put(actions.updateProfileStart());
    try {
        if(action.id !== undefined) {
            const response = yield axios.patch(`/users/${action.id}.json`, action.data);
            yield put(actions.updateProfileSuccess(response.data));
        } else {
            const response = yield axios.put('/users.json', action.data);
            yield put(actions.updateProfileSuccess(response.data));
        }
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
    }
        catch (error) {
            yield put(actions.submitSettingsFail(error))
        }
}
