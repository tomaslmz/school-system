import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor, primaryColorLight } from '../../config/colors';

export const Container = styled.section`
    display: flex;
    align-items: center;

    flex-direction: column;
    gap: 20px;

    max-width: 600px;
    padding: 20px;
    height: 500px;
    margin: 30px auto;
    background-color: white;
    border-radius: 4px;
`;

export const StudentContainer = styled.section`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    ::-webkit-scrollbar-track {
    }

    ::-webkit-scrollbar-thumb {
    }
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

export const Picture = styled.div`
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
`;

export const Data = styled.section`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;

export const Options = styled.section``;

export const Message = styled.p`
    color: red;
    font-weight: bolder;
`;

export const Name = styled.p`
    width: 113px;
    overflow: scroll;
`;

export const Email = styled.p`
    width: 193px;
    overflow: scroll;
`;
