import styled from 'styled-components';
import { primaryColor, primaryColorLight } from '../../config/colors';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
    gap: 20px;

    max-width: 600px;
    padding: 20px;
    height: 500px;
    margin: 30px auto;
    background-color: white;
    border-radius: 4px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;

    height: 200px;
    width: 240px;
    background-color: ${primaryColor};
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
