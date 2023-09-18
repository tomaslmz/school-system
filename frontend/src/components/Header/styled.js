import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    color: white;
    padding: 20px;
    background-color: ${primaryColor};

    a {
        color: #fff;
        font-weight: 700;
    }
`;
