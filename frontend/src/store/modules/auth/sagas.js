import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
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

function* registerRequest({ payload }) {
    try {
        const response = yield call(axios.post, 'users/create', payload);
        yield put(actions.registerSuccess({ ...response.data }));

        toast.success('You created an account! Try to login.');
    } catch {
        toast.error('Some error occurred trying to create an account!');
        yield put(actions.registerFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
