/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Nav } from './styled';
import { logout } from '../../store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    function handleLogout() {
        dispatch(logout());
        Redirect('/login');
    }

    return (
        <Nav>
            <Link to=".">
                <FaHome size={24} />
            </Link>

            {isLoggedIn ? (
                <Link to="/login" onClick={handleLogout}>
                    <FaSignInAlt size={24} />
                </Link>
            ) : (
                <Link to="/login">
                    <FaUserAlt size={24} />
                </Link>
            )}
        </Nav>
    );
}
