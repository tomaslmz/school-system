const initialState = {
    isButtonClicked: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
    switch (action.type) {
        case 'CLICKED_BUTTON_LOGIN':
            // eslint-disable-next-line no-case-declarations
            const newState = { ...state };
            newState.isButtonClicked = !newState.isButtonClicked;
            return newState;
        default:
            return state;
    }
}
