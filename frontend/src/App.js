import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000} className="toastContainer" />
            </Router>
        </Provider>
    );
}

export default App;
