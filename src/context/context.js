import React, {useState, useEffect} from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()
// Assim temos acesso a dois componentes, Provider e Consumer - GithubContext.Provider

const GithubProvider = ({children}) => {

    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    // request loading
    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(false)
    // error 
    const [error, setError] = useState({show: false, msg: ""})

    const toggleError = (show = false, msg = '') => {
        setError({show, msg})
    }

    useEffect( () => {

        const fetchData = async () => {
            await axios({
                method: 'GET',
                url : `${rootUrl}/rate_limit`
            }).then((result) => {
                setRequests(result.data.rate.remaining)
                if(result.data.rate.remaining === 0) {
                   toggleError(true, 'Sorry, you have excedeed your hourly rate limit!')
                }
            })
            .catch((err) => console.log(err.error))
        }

        fetchData()

    }, [])

    const data = {
        githubUser : githubUser,
        repos : repos,
        followers : followers,
        requests : requests,
        error : error
    }

    return (
        <GithubContext.Provider value={data}>
            {children}
        </GithubContext.Provider>   
    )

}

export {GithubProvider, GithubContext}