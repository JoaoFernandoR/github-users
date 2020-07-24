import React from 'react'
import Logimage from '../../images/login-img.svg'
import {useAuth0} from '@auth0/auth0-react'
// CSS
import './Login.scss'

const Login = () => {

    const {loginWithRedirect} = useAuth0()

    return (
        <div className="container_login">
            <img src={Logimage} alt="GitHub Login"/>
            <h1> GitHub User</h1>
            <div className="button_login">
                <button onClick={loginWithRedirect}> Log In </button>
            </div>
        </div>
    )
}

export default Login