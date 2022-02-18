import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const Search = ({input,setInput}) => {
    
   

    return (
        <div className="search">
            <div className="search_input">
                <SearchIcon className="search"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <KeyboardIcon className="keyboard"/>
                <KeyboardVoiceIcon className="voice"/>

            </div>
            
        </div>
    )
}

export default Search
