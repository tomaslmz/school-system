import React from 'react';

import { FaUserAlt, FaUserGraduate } from 'react-icons/fa';
import { Container, Button } from './styled';

export default function Home() {
    return (
        <Container>
            <Button>
                Manage users
                <br />
                <FaUserAlt size={50} />
            </Button>
            <Button>
                Manage students
                <br />
                <FaUserGraduate size={50} />
            </Button>
        </Container>
    );
}
