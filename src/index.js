import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react';
// CSS
import './index.css';

// Dominio do Auth0 : dev-vfx-t7rm.us.auth0.com
// ID do cliente do Auth0 : fkKkhfWyF11fB070fGP7piJUCsS0NRIJ

ReactDOM.render( 
    <Auth0Provider domain="dev-vfx-t7rm.us.auth0.com" 
    clientId="fkKkhfWyF11fB070fGP7piJUCsS0NRIJ"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
        <GithubProvider>
            <App />
        </GithubProvider>
    </Auth0Provider>
,document.getElementById('root') );

