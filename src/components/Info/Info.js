import React from 'react'
import { GithubContext } from '../../context/context'
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus} from 'react-icons/fi'
// CSS
import './Info.scss'

const Info = () => {

    const {githubUser} = React.useContext(GithubContext)
    const {following, followers, public_repos, public_gists } = githubUser

    const items = [
        { id: 1, icon: <GoRepo size="1.5rem" color= "#C22079"/>, label: 'Repos', api: public_repos},
        { id: 2, icon: <FiUsers size="1.5rem" color= "var(--mainGreen)"/>, label: 'Followers', api: followers, className:"followers-icon"},
        { id: 3, icon: <FiUserPlus size="1.5rem" color= "#7361F6"/>, label: 'Following', api: following, className:"following"},
        { id: 4, icon: <GoGist size="1.5rem" color= "#E5CC72"/>, label: 'Gists', api: public_gists, 
        className:"gists"}
    ]

    const renderItems = () => {
        return (
            items.map((item) => {
            return (
            <div className="info_container" key={item.id}>
                <div className={`icon_back ${item.className}`}>
                    {item.icon}
                </div>
                <div className="info_group">
                    <h2> {item.api} </h2>
                    <p> {item.label} </p>
                </div>
            </div>
            )
            })
        )
    }

    return (
    <section className="info">
        {renderItems()}            
    </section>
    )
}

export default Info