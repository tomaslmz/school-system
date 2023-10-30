/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import { Title, Input, Form } from './styled';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        // dispatch(exampleActions.isButtonClickedRequest());

        try {
            if (!email) {
                throw new Error('The email can not be null!');
            }

            if (!password) {
                throw new Error('The password can not be null!');
            }

            if (password.length <= 6) {
                throw new Error('The password needs to be highter than 6!');
            }

            dispatch(actions.loginRequest({ email, password }));
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleClick}>
                <label htmlFor="email">
                    E-mail:
                    <Input
                        type="email"
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
