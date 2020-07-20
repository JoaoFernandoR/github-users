import React from 'react'
import { Link } from 'react-router-dom'
import Logimage from '../../images/login-img.svg'
// CSS
import './Login.scss'

const Login = () => {
    return (
        <div className="container_login">
            <img src={Logimage} alt="GitHub Login"/>
            <h1> GitHub User</h1>
            <div className="button_login">
                <Link to='/'> Log In </Link>
            </div>
        </div>
    )
}

export default Login