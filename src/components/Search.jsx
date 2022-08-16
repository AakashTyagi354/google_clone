import React, { useState } from 'react'
import "./search.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {actionTypes} from "../reducer"

function Search({ hideButtons = true }) {
    const [{},dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault()
        console.log("search", input)
        dispatch({
           type: actionTypes.SET_SEARCH_TERM,
           term:input
        })
        navigate('/search');
   
    }
    return (
        <form className='search'>
            <div className="search-input">
                <SearchIcon className='search-icon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search-btn">
                    <Button type='submit' variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search-btn">
                    <Button className='serach-buttonsHidden' type='submit' variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined" className='serach-buttonsHidden'>I'm Feeling Lucky</Button>
                </div>
            )}

        </form>
    )
}

export default Search