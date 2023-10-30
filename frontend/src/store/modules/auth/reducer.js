import { toast } from 'react-toastify';
import * as types from '../types';
import axios from '../../../services/axios';

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
            delete axios.defaults.headers.Authorization;
            return initialState;
        case types.CLICKED_LOGIN_REQUEST:
            return state;
        case types.CLICKED_LOGOUT:
            delete axios.defaults.headers.Authorization;
            toast.error('You logged out!');
            return initialState;
        default:
            return state;
    }
}
