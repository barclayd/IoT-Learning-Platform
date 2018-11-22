import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {getTempData} from "../../shared/serverUtility/serverData";

export function* fetchLiveDataSaga (action) {
    yield put(actions.fetchLiveDataStart());
    try {
        yield getTempData((err, data) => {
            put(actions.fetchLiveDataSuccess(data));
        });
    } catch (error) {
        yield put(actions.fetchLiveDataFailed(error));
    }
}
