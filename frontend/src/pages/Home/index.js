import React, { useState, useEffect } from 'react';

import {
    FaPenSquare,
    FaUserCircle,
    FaExclamation,
    FaWindowClose,
    FaWind,
} from 'react-icons/fa';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
    Container,
    StudentContainer,
    Picture,
    Message,
    Name,
    Email,
} from './styled';
import axios from '../../services/axios';

export default function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('/students/list');
                setStudents(response.data);
            } catch {
                toast.error('Some error occurred trying to list students');
            }
        }

        getData();
    }, []);

    async function handleDelete(e, index, id) {
        try {
            await axios.delete(`/students/delete/${id}`);
            const newStudents = [...students];
            newStudents.splice(index, 1);
            setStudents(newStudents);
        } catch {
            toast.error('Some error occurred trying to delete a student!');
        }
    }

    function handleAskDelete(e) {
        e.preventDefault();
        const exclamation = e.currentTarget.nextSibling;
        exclamation.setAttribute('display', 'block');
        e.currentTarget.remove();
    }

    return (
        <Container>
            {students.length > 0 ? (
                students.map((student, index) => (
                    <StudentContainer id={String(student.id)} key={student.id}>
                        <Picture>
                            {get(student, 'Photos[0].url', false) ? (
                                <img
                                    src={student.Photos[0].url}
                                    alt=""
                                    crossOrigin=""
                                />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </Picture>
                        <Name width="113px">{student.name}</Name>
                        <Email width="193px">{student.email}</Email>

                        <Link
                            to={`student/${student.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <FaPenSquare
                                color="#C3073F"
                                cursor="pointer"
                                size={16}
                            />
                        </Link>

                        <Link
                            to={`/students/delete/${student.id}`}
                            onClick={handleAskDelete}
                        >
                            <FaWindowClose
                                color="#C3073F"
                                cursor="pointer"
                                size={16}
                            />
                        </Link>
                        {/* Não está dando para apagar */}

                        {/* <Link to={`/students/delete/${student.id}`}> */}
                        <FaExclamation
                            color="black"
                            cursor="pointer"
                            size={16}
                            display="none"
                            onClick={(e) => handleDelete(e, index, student.id)}
                        />
                        {/* </Link> */}
                    </StudentContainer>
                ))
            ) : (
                <Message>
                    At the moment, the system doesn&apos;t have any student!
                </Message>
            )}
        </Container>
    );
}
