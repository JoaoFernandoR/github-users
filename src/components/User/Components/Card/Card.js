import React from 'react'
import { GithubContext } from '../../../../context/context'
import { MdLocationOn} from 'react-icons/md'
import { RiBuilding4Line} from 'react-icons/ri'
import { FcLink} from 'react-icons/fc'

//CSS
import './Card.scss'

const Card = () => {

    const { githubUser } = React.useContext(GithubContext)
    const {avatar_url, html_url, name, company, blog, bio, location, twitter_username} = githubUser


    return (
    <section className="card">
        <div className="img_container">
            <div className="img_container">
                <img src={avatar_url} alt={name}/>       
                <div className="username_container">
                    <h3> {name} </h3>
                    <p> @{twitter_username}</p>
                </div>
            </div>
            <a href={html_url} target="_blank" rel="noopener noreferrer"> Follow </a>
        </div>
        <p className="bio">{bio}</p>
        <div>
            <div className="info_user">
                <RiBuilding4Line size="1.5em"/>
                <p> {company} </p>
            </div>
            <div className="info_user">
                <MdLocationOn size="1.5em"/>
                <p> {location} </p>
            </div>
            <div className="info_user">
                <FcLink size="1.5em"/>
                <a href={`http://${blog}`} target="_blank" rel="noopener noreferrer"> {blog} </a>
            </div>
        </div>
    </section>
    )
}

export default Card