import React from 'react'
import { GithubContext } from '../../context/context'
import ExampleChart from './Charts/ExampleChart'
import Pie3D from './Charts/Pie3D'

// STEP 2 - Chart Data
const chartData = [ /* label e value são necessários */
    {
      label: "HTML",
      value: "11"
    },
    {
      label: "Javascript",
      value: "80"
    },
    {
      label: "Canada",
      value: "10"
    },
    {
      label: "CSS",
      value: "100"
    },
  ];

const Repos = () => {

    const { repos } = React.useContext(GithubContext)

    let languages = repos.reduce((total, item) => {
        const {language} = item
        if (!language) return total
        if(!total[language]){
            // total[language] = 1
            total[language] = { label: language, value: 1}
        }
        else {
            // total[language] = total[language] + 1
            total[language] = {...total[language], value: total[language].value + 1}
        }
        // total['random'] = 30
        // console.log(item) Iremos retornar cada item, como se fosse o map
        // total é um objeto
        return total // importante, senão, não vai funcionar
    }, {})

    languages = Object.values(languages).sort((a, b) =>{
      return b.value - a.value
    }).slice(0,5)
    // organizar de acordo com a maior porcentagem primeiro, já que vamos
    // deixar um array com apenas cinco linguagens
    

    return (
        <div>
            <Pie3D data={languages}/>
        </div>
    )
}

export default Repos