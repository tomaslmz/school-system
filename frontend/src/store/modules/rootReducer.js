import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import loginReducer from './login/reducer';

export default combineReducers({
    example: exampleReducer,
    login: loginReducer,
});
