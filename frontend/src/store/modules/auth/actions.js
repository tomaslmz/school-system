import * as types from '../types';

export function loginSuccess(payload) {
    return {
        type: types.CLICKED_LOGIN_SUCCESS,
        payload,
    };
}

export function loginFailure() {
    return {
        type: types.CLICKED_LOGIN_FAILURE,
    };
}

export function loginRequest(payload) {
    return {
        type: types.CLICKED_LOGIN_REQUEST,
        payload,
    };
}

export function logout() {
    return {
        type: types.CLICKED_LOGOUT,
    };
}
