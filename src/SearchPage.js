import React from 'react'
import Search from './pages/Search';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Result from './Result';

const SearchPage = ({input,setInput}) => {
    const [{term},dispatch]=useStateValue();
    const {data} =useGoogleSearch(term);
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <a href="/"> <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""  /></a>
               
                <div className="searchPage_input">
                    <Search />
                </div>
                <div className="searchPage_right">
                    <SettingsApplicationsIcon className="settings"  sx={{width:25,height:25}}  />
                    <AppsIcon sx={{width:25,height:25}} />
                    <Avatar className="avatar" sx={{width:31,height:31}}>B</Avatar>
                </div>
            </div>
            <div className="searchPage_bottom">
                <p className="active">All</p>
                <p>Finance</p>
                <p>News</p>
                <p>Images</p>
                <p>Maps</p>
                <p>More</p>
                <p>Tools</p>
            </div>
            <hr></hr>
            <div className="searchPage_results">
                <div className="result_time">    
                <p>
                    Approximately {data?.searchInformation.formattedTotalResults} results found. ({data?.searchInformation.formattedSearchTime} seconds)
                </p>
            </div>
            {data?.items.map(item=>(
                <div className="searchPage_result" key={item.id}>
                    <a href={item.link} className="searchPage_result_link">
                        {item.displayLink}
                    </a>
                    <a
                    className="searchPage_result_title"
                    href={item.link}>
                        <h2>{item.title}</h2>

                    </a>
                    <p 
                        className="searchPage_result_Snippet"
                    >{item.snippet}</p>
                </div>
               
            ))}</div>
            </div>
    )
}

export default SearchPage
