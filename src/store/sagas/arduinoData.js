import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {getArduinoData} from "../../shared/serverUtility/serverData";

export function* fetchArduinoDataSaga (action) {
    yield put(actions.fetchArduinoDataStart());
    try {
        yield getArduinoData((err, data) => {
            put(actions.fetchArduinoDataSuccess(data));
        });
    } catch (error) {
        yield put(actions.fetchArduinoDataFailed(error));
    }
}
