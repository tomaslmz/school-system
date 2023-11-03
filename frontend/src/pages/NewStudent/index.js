/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';

import axios from '../../services/axios';
import { Form, Input, Title, Picture } from './styled';

import { Container } from '../../styles/GlobalStyles';

export default function NewStudent() {
    const date = new Date();

    const [name, setName] = useState('');
    const [image, setImage] = useState(
        'http://localhost:3001/static/default-profile.png'
    );
    const [imageFile, setImageFile] = useState(null);
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(
        new Date(date.getTime() - date.getTimezoneOffset() * 60000)
            .toISOString()
            .split('T')[0]
    );

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!name) {
                throw new Error('The name can not be null!');
            }

            if (!email) {
                throw new Error('The email can not be null!');
            }

            if (!birthdate) {
                throw new Error('The birthdate can not be null!');
            }

            const response = await axios.post('/students/create', {
                name,
                email,
                birth_date: birthdate,
            });

            if (imageFile) {
                const formData = new FormData();
                formData.append('photo', imageFile);
                formData.append('student_id', response.data.id);

                await axios.post('/photos/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            toast.success('The student has been created succesfully!');
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <Container>
            <Title>Add a new student</Title>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="image">
                    <Picture>
                        <input
                            type="file"
                            title=""
                            id="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setImage(
                                        URL.createObjectURL(e.target.files[0])
                                    );
                                    setImageFile(e.target.files[0]);
                                }
                            }}
                        />
                        <img src={image} crossOrigin="" />
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
                <button type="submit">Add</button>
            </Form>
        </Container>
    );
}
