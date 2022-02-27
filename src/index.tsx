import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './js/components/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);

// let app = document.getElementById('app');
// ReactDOM.render(<App/>, app);
