import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from "../../shared/axios-instance";

export function* createUseCaseSaga(action) {
    yield put(actions.createUseCaseStart());
    try {
        const response = yield axios.patch(`/useCases/${action.id}.json?auth=${localStorage.getItem('token')}`, action.data);
        yield put(actions.createUseCaseSuccess(response.data.name, action.data))
    } catch (error) {
        yield put(actions.createUseCaseFail(error))
    }
}
