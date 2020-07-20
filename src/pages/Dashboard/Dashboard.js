import React from 'react'
// Components
import User from '../../components/User/User'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Repos from '../../components/Repos/Repos'
import Info from '../../components/Info/Info'
// CSS
import './Dashboard.scss'


const Dashboard = () => {
    return (
    <section>
        {/* <Navbar /> */}
        {/* <Search /> */}
        <Info />
        <User />
        {/* <Repos /> */}
    </section>
    )
}

export default Dashboard