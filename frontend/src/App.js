import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Routes from './routes';

function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toastContainer" />
        </Router>
    );
}

export default App;
