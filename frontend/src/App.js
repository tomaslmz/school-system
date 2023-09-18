import React from 'react';
import Login from './pages/Login';
import Header from './components/Header';

import GlobalStyle from './styles/GlobalStyles';

function App() {
    return (
        <>
            <Header />
            <Login />
            <GlobalStyle />
        </>
    );
}

export default App;
