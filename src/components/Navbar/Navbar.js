import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// CSS
import './Navbar.scss'

const Navbar = () => {

    const { isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0()

    console.log({isAuthenticated, user, isLoading})

    const renderUser = () => {
        if(isAuthenticated) {
            return (
                <div className="user_info">
                    <img src={user.picture} alt="user"/>
                    <h4> <span> Hello, </span> {user.name} </h4>
                    <button onClick={() => logout({returnTo:window.location.origin})}> Logout </button>
                </div>
            )
        }
    }
    return (
        <section className="navbar">
            {renderUser()}
            {!isAuthenticated && <button onClick={loginWithRedirect}> Login </button>}
        </section>
    )
}

export default Navbar