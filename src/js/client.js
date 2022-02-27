import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/Editor';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';

const Main = () => {
    return (
        <>
        <Header />
        <div className='main'>
            <LeftMenu />
            <Editor />
        </div>
        </>
    );
}

let app = document.getElementById('app');
ReactDOM.render(<Main/>, app);
