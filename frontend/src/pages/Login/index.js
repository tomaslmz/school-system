import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
    return (
        <Container>
            <Title>Login</Title>
            <button type="submit">Submit</button>
        </Container>
    );
}
