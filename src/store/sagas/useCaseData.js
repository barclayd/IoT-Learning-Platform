import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {getUseCaseData} from "../../shared/serverUtility/serverData";

export function* fetchUseCaseSaga (action) {
    yield put(actions.fetchUseCaseStart());
    try {
        yield getUseCaseData((err, data) => {
            put(actions.fetchUseCaseSuccess(data));
        });
    } catch (error){
        yield put(actions.fetchUseCaseFailed(error));
    }
}
