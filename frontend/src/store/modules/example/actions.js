import * as types from '../types';

export function isButtonClickedSuccess() {
    return {
        type: types.CLICKED_BUTTON_SUCCESS,
    };
}

export function isButtonClickedFailure() {
    return {
        type: types.CLICKED_BUTTON_FAILURE,
    };
}

export function isButtonClickedRequest() {
    return {
        type: types.CLICKED_BUTTON_REQUEST,
    };
}
