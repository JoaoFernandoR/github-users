import React from 'react'
import { Link } from 'react-router-dom'
import ErrorImage from '../../images/blue_error.png'
// CSS
import './Error.scss'

const Error = () => {
    return (
    <div className="container_error">
        <img src={ErrorImage} alt="Error"/>
        <h3> Sorry the page cannot be found </h3>
        <div className="error_button">
            <Link to="/"> Return </Link>
        </div>
    </div>
    )
}

export default Error