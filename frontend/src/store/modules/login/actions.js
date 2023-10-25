import * as types from '../types';

export function isLoginSuccess(payload) {
    return {
        type: types.CLICKED_LOGIN_SUCCESS,
        payload,
    };
}

export function isLoginFailure() {
    return {
        type: types.CLICKED_LOGIN_FAILURE,
    };
}

export function isLoginRequest(payload) {
    return {
        type: types.CLICKED_LOGIN_REQUEST,
        payload,
    };
}
