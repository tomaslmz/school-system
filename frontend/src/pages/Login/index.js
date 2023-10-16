import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.isButtonClickedRequest());
    }
    return (
        <Container>
            <Title>Login</Title>
            <button type="submit" onClick={handleClick}>
                Submit
            </button>
        </Container>
    );
}
