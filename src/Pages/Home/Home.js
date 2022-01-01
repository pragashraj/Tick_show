import React, { Component } from 'react'

import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomSearch from './CustomSearch'
import SelectorDropDown from './SelectorDropDown'
import ContentList from '../../Components/ContentList/ContentList'
import ContentLeft from './ContentLeft'

import { Grid } from '@mui/material'
import EditLocation from '@mui/icons-material/EditLocation'
import CalendarToday from '@mui/icons-material/CalendarToday'
import AccessibilityNew from '@mui/icons-material/AccessibilityNew'

import './Home.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import movieCardImage2 from '../../assets/images/2.jpg'
import movieCardImage3 from '../../assets/images/3.jpg'
import movieCardImage4 from '../../assets/images/4.jpg'

class Home extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.createDummyData()
    }

    createDummyData = () => {
        const data = [
            {name: "Spiderman No Way home", src: movieCardImage1, genre: ["Action", "Adventure"], rotten: "94%", imdb: "99%" },
            {name: "The Batman", src: movieCardImage2, genre: ["Action", "Adventure", "Crime"], rotten: "94%", imdb: "99%" },
            {name: "Fantastic Beasts 3", src: movieCardImage3, genre: ["Action", "Adventure"], rotten: "94%", imdb: "99%" },
            {name: "The Amazing Spiderman 3", src: movieCardImage4, genre: ["Action", "Adventure"], rotten: "94%", imdb: "99%" }
        ]

        this.setState({ movies: data })
    }

    renderContentList = (title, movies) => {
        return (
            <ContentList 
                title = {title}
                listItems = {movies}
            />
        )
    }

    renderSelector = (label, value, icon) => {
        return (
            <SelectorDropDown
                label = {label}
                value = {value}
                icon = {icon}
            />
        )
    }

    rederCustomSearch = () => {
        return (
            <CustomSearch placeholder = "search for movies"/>
        )
    }

    renderHeaderSlideFooter = () => {
        return (
            <div className = 'header_slide_footer'>
                <div className = "overlay"/>
                <span>What are you looking for ?</span>
                <div className = 'header_slide_footer_conatiner'>
                    <Grid container spacing = {2}>
                        <Grid item xs = {6} sm = {6} md = {3}>
                            { this.rederCustomSearch() }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("City", "Colombo", EditLocation) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("Date", "31/12/2021", CalendarToday) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("Experience", "2D", AccessibilityNew) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {1}/>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            <CustomButton label = "Search"/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    renderHeaderTextContainer = () => {
        return (
            <div className = 'home_header_container'>
                <div className = 'header_mid_text_container'>
                    <span>Buy movie tickets in advance, watch trailers, read reviews and much more</span>
                    <div className = 'header_main_text'>
                        <h2>Book your tickets</h2>
                        <h2>with us</h2>
                    </div>
                </div>
            </div>
        )
    }

    renderBodyContentExtended = () => {
        const {movies} = this.state
        return (
            <div className = 'home_container'>
                <div className = 'home_header_slide'>
                    <div className = "overlay"/>
                    { this.renderHeaderTextContainer() }
                    { this.renderHeaderSlideFooter() }
                </div>
                <div className = 'home_body_container'>
                    <div className = 'home_parallax'>
                    <div className = "overlay"/>
                        <div className = 'content_list'>
                            { this.renderContentList("Movies", movies) }
                        </div>
                        <div className = 'content_info'>
                            <ContentLeft/>
                        </div>
                        <div className = 'content_list'>
                            { this.renderContentList("Upcoming Movies", movies) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className = 'home_root_container'>
                { this.renderBodyContentExtended() }
            </div>
        )
    }
}

export default Home