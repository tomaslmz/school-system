import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function NotFound() {
    return (
        <Container>
            <Title>ERROR</Title>
            <h3>This page doesn&apos;t exist!</h3>
        </Container>
    );
}
