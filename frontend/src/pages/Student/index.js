/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';

import axios from '../../services/axios';
import { Form, Input, Title, Picture } from './styled';

import { Container } from '../../styles/GlobalStyles';

export default function Student() {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`/students/search/${id}`);

                setName(response.data.name);
                setEmail(response.data.email);
                setBirthdate(response.data.birth_date.substring(0, 10));

                if (response.data.Photos[0]) {
                    setImage(response.data.Photos[0].url);
                }
            } catch {
                toast.error(
                    'Some error occurred trying to get data from student, try again later!'
                );
            }
        }

        getData();
    }, []);

    return (
        <Container>
            <Title>Edit student</Title>
            <Form>
                <label htmlFor="image">
                    <Picture>
                        <input type="file" title="" id="file" />
                        {image.length > 0 ? (
                            <img src={image} crossOrigin="" />
                        ) : (
                            <FaUserCircle size={100} />
                        )}
                    </Picture>
                </label>
                <label htmlFor="name">
                    Name:
                    <Input
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <Input
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                </label>
                <label htmlFor="birthdate">
                    Birthdate
                    <Input
                        id="birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        type="date"
                    />
                </label>
            </Form>
        </Container>
    );
}
