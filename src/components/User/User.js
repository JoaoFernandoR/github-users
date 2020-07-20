import React from 'react'
// Components
import Card from './Components/Card/Card'
import Followers from './Components/Followers/Followers'
// CSS
import './User.scss'

const User = () => {

    return (
    <section className="user">
        <div className="titles">
            <h2 className="titulo"> User </h2>
            <h2 className="titulo"> Followers </h2>
        </div>
        <div className="card_followers">
            <Card />
            <Followers />
        </div>
    </section>
    )
}

export default User