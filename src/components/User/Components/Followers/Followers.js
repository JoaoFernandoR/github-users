import React from 'react'
import { GithubContext } from '../../../../context/context'
import Emoji from 'react-emoji-render'
//CSS
import './Followers.scss'

const Followers = () => {

    let { followers } = React.useContext(GithubContext)

    const renderFollowers = () => {
        return (
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
        )
    }

    const conditionallyRender = () => {
        if (followers.length === 0) {
            return (
                <Emoji text="No Followers yet :cry:" /> 
            )
        }
        else {
            return (
                renderFollowers()
            )
        }
    }
 
    return (
    <React.Fragment>
    <section className="followers">
        <h2 className="titulo"> Followers </h2>
        {conditionallyRender()}
    </section>
    </React.Fragment>
    )
}

export default Followers