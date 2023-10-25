import { toast } from 'react-toastify';
import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
    isButtonClicked: false,
};

// eslint-disable-next-line default-param-last, func-names
export default function (state = initialState, action) {
    switch (action.type) {
        case types.CLICKED_BUTTON_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const newState = { ...state };
            newState.isButtonClicked = !newState.isButtonClicked;
            return newState;

        case types.CLICKED_BUTTON_FAILURE:
            delete axios.defaults.headers.Authorization;
            return state;
        case types.CLICKED_BUTTON_REQUEST:
            return state;
        default:
            return state;
    }
}
