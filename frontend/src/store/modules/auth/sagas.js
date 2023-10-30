import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, 'tokens/create', payload);
        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('You logged in!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    } catch (e) {
        toast.error('Incorrect email or password');
        yield put(actions.loginFailure());
    }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
