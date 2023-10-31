import styled from 'styled-components';

export const Title = styled.h1`
    color: red;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid #9e9e9e;
    border-radius: 5px;
    height: 30px;
    padding: 20px 10px;
    margin-top: 5px;
    font-size: 16px;
`;

export const Form = styled.form`
    margin-top: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
`;

export const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    input {
        position: fixed;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        opacity: 0;
        background-color: black;
    }

    input[type='file']::-webkit-file-upload-button {
        opacity: 0;
    }

    input:hover {
        opacity: 0.5;
    }
`;
