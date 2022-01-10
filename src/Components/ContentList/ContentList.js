import React from 'react'

import MovieCard from '../MovieCard'
import EventCard from '../EventCard'

//Material-UI
import Grid from '@mui/material/Grid'

import './ContentList.css'

const ContentList = ({type, title, listItems, handleViewMoreOnClick}) => {

    const HREF = {
        "Movies": "/movies",
        "Theatres": "/theatres",
        "Events": "/"
    }

    const renderEventsList = () => {
        return (
            <Grid container spacing = {2}>
                { listItems.map((item, idx) => {
                    return (
                        <Grid item xs = {12} sm = {6} md = {3} key = {idx}>
                            <EventCard item = {item}/>
                        </Grid>
                    )
                }) }
            </Grid>
        )
    }

    const renderMoviesList = () => {
        return (
            <Grid container spacing = {2}>
                { listItems.map((item, idx) => {
                    return (
                        <Grid item xs = {6} sm = {6} md = {2} key = {idx}>
                            <MovieCard item = {item}/>
                        </Grid>
                    )
                }) }
            </Grid>
        )
    }

    const renderContentList = () => {
        switch (type) {
            case "Movies": return renderMoviesList()
            case "Events": return renderEventsList()
            default: return 
        }
    }

    const renderTop = () => (
        <div className = 'list_header'>
            <h1>{title}</h1>
            <a href = {HREF[type]} className = 'show_more_text' onClick = {handleViewMoreOnClick}>View All</a>
        </div> 
    )

    return (
        <div className = 'block_list_root'>
            <div className = 'block_list_container'>
                { renderTop() }
                <div className = 'list_items'>
                    { renderContentList() }
                </div>
            </div>
        </div>
    )
}

export default ContentList