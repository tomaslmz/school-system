/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Input, Form } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        // dispatch(exampleActions.isButtonClickedRequest());
    }

    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleClick}>
                <label htmlFor="email">
                    E-mail:
                    <Input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </Container>
    );
}
