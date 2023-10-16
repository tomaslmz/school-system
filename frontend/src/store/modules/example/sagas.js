import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const request = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};

function* exampleRequest() {
    try {
        yield call(request);
        yield put(actions.isButtonClickedSuccess());
    } catch {
        yield put(actions.isButtonClickedFailure());
    }
}

export default all([takeLatest(types.CLICKED_BUTTON_REQUEST, exampleRequest)]);
