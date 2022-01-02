import React from 'react'

import MovieCard from '../MovieCard'
import TheatreCard from '../TheatreCard'

//Material-UI
import Grid from '@mui/material/Grid'

import './ContentList.css'

const ContentList = ({type, title, listItems, handleViewMoreOnClick}) => {

    const getHref = () => {
        if (type === "Movies")
            return "/movies"
        else
            return "/theatres"
    }

    const renderTheatresList = (item, idx) => {
        return (
            <Grid item xs = {12} sm = {6} md = {3} key = {idx}>
                <TheatreCard item = {item}/>
            </Grid>
        )
    }

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
            <a href = {getHref()} className = 'show_more_text' onClick = {handleViewMoreOnClick}>View More</a>
        </div> 
    )

    const renderContentList = () => (
        <div className = 'list_items'>
            <Grid container spacing = {2}>
                { listItems.map((item, idx) => type === "Movies" ? renderList(item, idx) : renderTheatresList(item, idx) ) }
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