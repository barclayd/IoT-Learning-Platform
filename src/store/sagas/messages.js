import {put} from 'redux-saga/effects';
import * as actions from "../actions";
import axios from "../../shared/axios-instance";

export function* postMessageSaga(action) {
    yield put(actions.postMessageStart());
    console.log(action.useCaseId);
    try {
            console.log(action.message);
            const response = yield axios.patch(`/useCases/${action.useCaseId}/messages/${action.messageId}.json?auth=${localStorage.getItem('token')}`, action.message);
            yield put(actions.postMessageSuccess(response.data));
        try {
            const response = yield axios.get(`/useCases.json?auth=${localStorage.getItem('token')}`);
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
    catch (error) {
        yield put(actions.postMessageFailed(error))
    }
}
