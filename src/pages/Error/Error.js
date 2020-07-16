import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Error.scss'

const Error = () => {
    return (
    <div className="container_error">
        <img src="https://www.freeiconspng.com/uploads/blue-error-danger-icon-25.png" alt="Error"/>
        <h3> Sorry the page cannot be found </h3>
        <div className="error_button">
            <Link to="/"> Return </Link>
        </div>
    </div>
    )
}

export default Error