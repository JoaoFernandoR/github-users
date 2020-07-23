import React, {useState, useEffect} from 'react'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import mockUser from './mockData.js/mockUser'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()
// Assim temos acesso a dois componentes, Provider e Consumer - GithubContext.Provider

const GithubProvider = ({children}) => {

    const [user, setUser] = useState(mockUser)
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

    const searchGithubUser = async (user) => {

        toggleError(false)
        setLoading(true)

        await axios({
            method: 'GET',
            url : `${rootUrl}/users/${user}`
        }).then((result) => {
                setUser(result.data)
            }
            ).catch((err) => {
                toggleError(true, 'User not Found')
            })
            
        await axios({
            method: 'GET',
            url : `${rootUrl}/users/${user}/repos?per_page=100`
        }).then((result) => {
                setRepos(result.data)
            }
            ).catch((err) => {
                toggleError(true, 'Repos not Found')
            })    

        await axios({
            method: 'GET',
            url : `${rootUrl}/users/${user}/followers?per_page=100`
        }).then((result) => {
                setFollowers(result.data)
            }
            ).catch((err) => {
                toggleError(true, 'Followers not Found')
            })     

        setLoading(false)

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

    }, [user, requests])

    const data = {
        repos : repos,
        followers : followers,
        requests : requests,
        error : error, 
        searchGithubUser : searchGithubUser,
        user : user,
        loading : loading
    }

    return (
        <GithubContext.Provider value={data}>
            {children}
        </GithubContext.Provider>   
    )

}

export {GithubProvider, GithubContext}