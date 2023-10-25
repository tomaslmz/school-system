import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';

const request = async () => {
    try {
        const payload = await axios({
            url: 'tokens/create',
            method: 'post',
        });

        return payload;
    } catch (e) {
        return e;
    }
};

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, 'tokens/create', payload);
        yield put(actions.isLoginSuccess({ ...response.data }));

        toast.success('You logged in!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    } catch (e) {
        toast.error('Invalid email or password');
        yield put(actions.isLoginFailure());
    }
}

export default all([takeLatest(types.CLICKED_LOGIN_REQUEST, loginRequest)]);
