import { toast } from 'react-toastify';
import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: null,
    user: {},
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
    switch (action.type) {
        case types.CLICKED_LOGIN_SUCCESS:
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.token;
            return newState;
        case types.CLICKED_LOGIN_FAILURE:
            console.log('failure');
            return state;
        case types.CLICKED_LOGIN_REQUEST:
            console.log('request');
            return state;
        default:
            return state;
    }
}
