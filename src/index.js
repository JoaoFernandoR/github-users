import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GithubProvider } from './context/context'
// CSS
import './index.css';

ReactDOM.render( 
    <GithubProvider>
        <App />
    </GithubProvider>
,document.getElementById('root') );

