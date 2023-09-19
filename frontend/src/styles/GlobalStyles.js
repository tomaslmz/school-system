import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${colors.primaryDarkColor};

        height: 100%;
    }

    button {
        cursor: pointer;
        background-color: ${colors.primaryColor};
        color: white;
        padding: 10px 20px;
        font-weight: 700;
        border: none;
        border-radius: 4px;
    }

    button:hover {
        background-color: ${colors.primaryColorLight};
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    background-color: #fff;
    padding: 30px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
