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
    const [image, setImage] = useState(
        'http://localhost:3001/static/default-profile.png'
    );
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [photoId, setPhotoId] = useState(0);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`/students/search/${id}`);

                setName(response.data.name);
                setEmail(response.data.email);
                setBirthdate(response.data.birth_date.substring(0, 10));

                if (response.data.Photos[0]) {
                    setImage(response.data.Photos[0].url);
                    setPhotoId(response.data.Photos[0].id);
                }
            } catch {
                toast.error(
                    'Some error occurred trying to get data from student, try again later!'
                );
            }
        }

        getData();
    }, []);

    async function handleChangeImage(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));

            try {
                const formData = new FormData();
                formData.append('photo', e.target.files[0]);

                formData.append('student_id', id);

                if (photoId > 0) {
                    await axios.delete(`/photos/remove/${photoId}`);
                }

                await axios.post('/photos/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                toast.success('Your photo is updated!');
            } catch (err) {
                toast.error(
                    'Some error occurred trying to update your photo, try again later!'
                );
            }
        }
    }

    async function handleEdit(e) {
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

            axios.patch(`/students/update/${id}`, {
                name,
                email,
                birth_date: birthdate,
            });

            toast.success('The student has been updated successfully!');
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <Container>
            <Title>Edit student</Title>
            <Form onSubmit={(e) => handleEdit(e)}>
                <label htmlFor="image">
                    <Picture>
                        <input
                            type="file"
                            title=""
                            id="file"
                            onChange={(e) => handleChangeImage(e)}
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
                <button type="submit">Edit</button>
            </Form>
        </Container>
    );
}
