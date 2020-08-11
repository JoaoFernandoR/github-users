import React from 'react'
import { GithubContext } from '../../context/context'
import Doughnut2D from './Charts/Doughnut2D'
import Pie3D from './Charts/Pie3D'
import Column3D from './Charts/Column3D'
import Bar3D from './Charts/Bar3D'
// CSS
import './Repos.scss'

const Repos = () => {

    const { user } = React.useContext(GithubContext)
    const { repos } = React.useContext(GithubContext)

    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item
        if (!language) return total
        if(!total[language]){
            // total[language] = 1
            total[language] = { label: language, value: 1, 
            stars: stargazers_count}
        }
        else {
            // total[language] = total[language] + 1
            total[language] = {...total[language], value: total[language].value + 1,
            stars: total[language].stars + stargazers_count}
        }
        // total['random'] = 30
        // console.log(item) Iremos retornar cada item, como se fosse o map
        // total é um objeto
        return total // importante, senão, não vai funcionar
    }, {})

    const mostUsed = Object.values(languages).sort((a, b) =>{
      return b.value - a.value
    }).slice(0,5)
    // organizar de acordo com a maior porcentagem primeiro, já que vamos
    // deixar um array com apenas cinco linguagens
    
    // most stars per language

    const mostPopular = Object.values(languages).sort((a, b) => {
      return b.starts - a.stars
    }).map((item) => {
      return {...item, value: item.stars}
    }).slice(0,5)

    // stars, forks

    let {stars, forks} = repos.reduce((total, item) => {
      const {stargazers_count, name, forks} = item
      total.stars[stargazers_count] = {label: name, value: stargazers_count}
      total.forks[forks] = {label: name, value: forks}
      return total
    }, {stars: {}, forks:{}})

    stars = Object.values(stars).slice(-5).reverse()
    forks = Object.values(forks).slice(-5).reverse()
    
    const renderRepos = () => {

      if (!user) return

      else {
        return (
          <React.Fragment>
            <div className="chart" id="chart_1">
              <Pie3D data={mostUsed}/>
            </div>
            <div className="chart" id="chart_2">
              <Column3D data={stars} />
            </div>
            <div className="chart" id="chart_1">
              <Doughnut2D data={mostPopular} />
            </div>
            <div className="chart" id="chart_2">
              <Bar3D data={forks} />
            </div>
          </React.Fragment>
        )
      }
    }

    return (
        <section className="repos">
          {renderRepos()}
        </section>
    )
}

export default Repos