import React from 'react'
import { GithubContext } from '../../../../context/context'
//CSS
import './Followers.scss'

const Followers = () => {

    const { followers } = React.useContext(GithubContext)

    return (
    <section className="followers">
        {
            followers.map((item) => {
                return (
                <div className="img_container" key={item.login}>
                    <img src={item.avatar_url} alt={item.login}/>       
                    <div className="username_container">
                        <h5> {item.login} </h5>
                        <a href={item.html_url} target="_blank" rel="noopener noreferrer"> {item.html_url}</a>
                    </div>
                </div>
                )
            })
        }
    </section>
    )
}

export default Followers