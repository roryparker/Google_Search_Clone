import React, { useState } from 'react'
import "./Home.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import { useStateValue } from '../StateProvider';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
import {actionTypes} from "../reducer"
const Home = ({input,setInput}) => {
    const [{},dispatch]=useStateValue();
    const navigate=useNavigate();
    const search=(e)=>{
        e.preventDefault();
        console.log(input);
        dispatch({
            type:"SET_SEARCH_TERM",
            term:input
        })

        navigate("/search");
    }
    return (
        <div className="home">

            <div className="home_header">
                <div className="home_headerRight">
                    <a href="/" >Gmail</a>
                    <a href="/">Images</a>
                    <AppsIcon className="apps"/>
                    <Avatar className="avatar" sx={{width:31,height:31}}/>
                </div>
            </div>
            <form className="home_center" onSubmit={search}>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                <div className="input_container">
                    <Search input={input} setInput={setInput}/>
                </div>

                <div className="button_container">
                    <button onClick={search}>Search In Google</button>
                    <button>I'm Feeling Lucky</button>
                </div>

            </form>
        </div>
    )
}

export default Home
