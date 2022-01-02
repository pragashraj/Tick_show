import React from 'react'

import MovieCard from '../MovieCard'

//Material-UI
import Grid from '@mui/material/Grid'

import './ContentList.css'

const ContentList = ({title, listItems, handleViewMoreOnClick}) => {

    const renderList = (item, idx) => {
        return (
            <Grid item xs = {6} sm = {6} md = {2} key = {idx}>
                <MovieCard item = {item}/>
            </Grid>
        )
    }

    const renderTop = () => (
        <div className = 'list_header'>
            <h1>{title}</h1>
            <span className = 'show_more_text' onClick = {handleViewMoreOnClick}>View More</span>
        </div> 
    )

    const renderContentList = () => (
        <div className = 'list_items'>
            <Grid container spacing = {2}>
                { listItems.map((item, idx) => renderList(item, idx) ) }
            </Grid>
        </div>
    )

    return (
        <div className = 'block_list_root'>
            <div className = 'block_list_container'>
                { renderTop() }
                { renderContentList() }
            </div>
        </div>
    )
}

export default ContentList