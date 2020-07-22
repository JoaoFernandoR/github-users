import React, {useState} from 'react'
import './Search.scss'
import { BsSearch } from 'react-icons/bs'

const Search = () => {

    const [inputValue, setInputValue] = useState('')
    // get global things from global context
    
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
                    <button type="submit"> Search </button>
                    <h3> Requests: 58 /60 </h3>
                </div>
            </form>
        </section>
    )
}

export default Search