/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { FaHome, FaSignInAlt, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Nav, Separator } from './styled';
import { logout } from '../../store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user.name);

    function handleLogout() {
        dispatch(logout());
        Redirect('/login');
    }

    return (
        <Nav>
            <Separator>
                <Link to=".">
                    <FaHome size={24} />
                </Link>
                {isLoggedIn ? <p>Hello, {user}!</p> : null}
            </Separator>
            <Separator>
                {!isLoggedIn ? (
                    <Link to="register">
                        <FaUserAlt size={24} />
                    </Link>
                ) : null}

                {isLoggedIn ? (
                    <Link to="/login" onClick={handleLogout}>
                        <FaPowerOff size={24} />
                    </Link>
                ) : (
                    <Link to="/login">
                        <FaSignInAlt size={24} />
                    </Link>
                )}
            </Separator>
        </Nav>
    );
}
