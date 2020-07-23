import React from 'react'
import Loading from '../../images/preloader.gif'
import { GithubContext } from '../../context/context'
// Components
import User from '../../components/User/User'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Repos from '../../components/Repos/Repos'
import Info from '../../components/Info/Info'
// CSS
import './Dashboard.scss'


const Dashboard = () => {

    const { loading } = React.useContext(GithubContext)

    const renderComponents = () => {
        if (loading) {
            return (
                <div className="loading_container">
                    <img src={Loading} alt="Loading" className="loading"/>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                    <Info />
                    <User />
                    <Repos />
                </React.Fragment>
            )
        }
    }

    return (
    <section className="dashboard">
        <Navbar />
        <Search />
        {renderComponents()}
    </section>
    )
}

export default Dashboard