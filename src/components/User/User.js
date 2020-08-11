import React from 'react'
import { GithubContext } from '../../context/context'
// Components
import Card from './Components/Card/Card'
import Followers from './Components/Followers/Followers'
// CSS
import './User.scss'

const User = () => {

    const { user } = React.useContext(GithubContext)

    const renderUsers = () => {
        if (!user) {
            return <h2 className="no_users">Start Searching</h2>
        }
    
        else {
            return (
                <div className="card_followers">
                    <Card />
                    <Followers />
                </div>
            )
    
        }

    }

    return (
    <section className="user">
        {renderUsers()}
    </section>
    )
}

export default User