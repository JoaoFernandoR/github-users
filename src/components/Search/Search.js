import React, {useState} from 'react'
import { GithubContext } from '../../context/context'
import { BsSearch } from 'react-icons/bs'
// CSS
import './Search.scss'

const Search = () => {

    const {requests, error} = React.useContext(GithubContext)

    const [inputValue, setInputValue] = useState('')
    
    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (inputValue === '') return
        
        setInputValue('')
        
    }

    return (
        <section>
            <form className="search" onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="icon">
                        <BsSearch color="#7361F6"/>
                    </div>
                    <input type="text" 
                    onChange={handleInput} 
                    value={inputValue}
                    placeholder="Enter Github User"/>
                </div>
                <div className="other-group">
                    {requests > 0 && <button type="submit"> Search </button>}                    
                    {error.show && <p className="error">{error.msg}</p>}
                    <h3> Requests: {requests} /60 </h3>
                </div>
            </form>
        </section>
    )
}

export default Search