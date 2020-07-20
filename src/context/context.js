import React, {useState, useEffect} from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
// import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()
// Assim temos acesso a dois componentes, Provider e Consumer - GithubContext.Provider

const GithubProvider = ({children}) => {

    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)

    const data = {
        githubUser : githubUser,
        repos : repos,
        followers : followers
    }

    return (
        <GithubContext.Provider value={data}>
            {children}
        </GithubContext.Provider>   
    )

}

export {GithubProvider, GithubContext}