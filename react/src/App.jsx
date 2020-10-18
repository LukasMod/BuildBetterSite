import React from 'react';

import AsideMenu from './compontents/AsideMenu/AsideMenu';
import Content from './compontents/Content/Content';
import Footer from './compontents/Footer/Footer';
import Header from './compontents/Header/Header';

import "./App.scss";

const App = () => {
    return (
        <>
            <Header />
            <div className='content-wrapper'>
                <AsideMenu />
                <Content />
            </div>
            <Footer />
        </>
    );
}

export default App;