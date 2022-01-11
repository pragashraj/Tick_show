import React, { Component } from 'react'

import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomSearch from './CustomSearch'
import SelectorDropDown from './SelectorDropDown'
import ContentList from '../../Components/ContentList/ContentList'
import ContentLeft from './ContentLeft'

//Material-UI
import { Grid } from '@mui/material'
import EditLocation from '@mui/icons-material/EditLocation'
import CalendarToday from '@mui/icons-material/CalendarToday'
import AccessibilityNew from '@mui/icons-material/AccessibilityNew'

import './Home.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import eventSample from '../../assets/images/event_sample.jpg'

class Home extends Component {
    state = {
        movies: [],
        events: [],
        movieSearchValue: "",
        city: "Colombo",
        date: "31/12/2021",
        experience: "2D"
    }

    dummySynopsis = "Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque."

    componentDidMount() {
        this.createDummyData()
    }

    createDummyData = () => {
        const movie = { 
            name: "Spiderman No Way home", 
            src: movieCardImage1, 
            genre: ["Action", "Adventure"], 
            rotten: "94%", 
            imdb: "99%",
            userRate: "4.5",
            url: "https://Google.com",
            synopsis: this.dummySynopsis,
            cast: [],
            crew: [],
        }

        const event = {
            name: "Ar Rahman Live-in-concert", 
            src: eventSample, 
            location: "Negombo-Colombo Main Rd, Ja-Ela 11350", 
            contact: "0117 549 650",
            description: this.dummySynopsis
        }

        const dummyMovieArr = ["1", "2", "3", "4", "5", "6"]
        const dummyEventsArr = ["1", "2", "3", "4"]
        let events_Data = []
        let movies_Data = []

        dummyMovieArr.forEach(() => movies_Data.push(movie))
        dummyEventsArr.forEach(() => events_Data.push(event))

        this.setState({ movies: movies_Data, events: events_Data })
    }

    handleSearchOnClick = () => {

    }

    handleWatchTrailerOnClick = () => {

    }

    handleBuyTicketsOnClick = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    renderContentLeft = (title, type, item) => {
        return (
            <ContentLeft 
                title = {title}
                type = {type}
                item = {item}
                handleWatchTrailerOnClick = {this.handleWatchTrailerOnClick}
                handleBuyTicketsOnClick = {this.handleBuyTicketsOnClick}
            />
        )
    }

    renderContentList = (type, title, dataList) => {
        return (
            <ContentList
                type = {type} 
                title = {title}
                listItems = {dataList}
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

    renderCustomSearch = () => {
        return (
            <CustomSearch 
                placeholder = "search for movies"
                name = "movieSearchValue"
                value = {this.state.movieSearchValue}
                handleOnChange = {this.handleInputOnChange}
            />
        )
    }

    renderHeaderSlideFooter = () => {
        const {city, date, experience} = this.state
        return (
            <div className = 'header_slide_footer'>
                <div className = "overlay"/>
                <span>What are you looking for ?</span>
                <div className = 'header_slide_footer_conatiner'>
                    <Grid container spacing = {2}>
                        <Grid item xs = {6} sm = {6} md = {3}>
                            { this.renderCustomSearch() }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("City", city, EditLocation) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("Date", date, CalendarToday) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("Experience", experience, AccessibilityNew) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {1}/>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            <CustomButton label = "Search" onClick = {this.handleSearchOnClick}/>
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

    renderBodyContents = () => {
        const {movies, events} = this.state
        return (
            <div className = 'home_parallax'>
                <div className = 'content_list'>
                    { this.renderContentList("Movies", "Movies", movies) }
                </div>
                <div className = 'content_info'>
                    { this.renderContentLeft("Now Showing", "Movies", movies[0]) }
                </div>
                <div className = 'content_list'>
                    { this.renderContentList("Movies", "Upcoming Movies", movies) }
                </div>
                <div className = 'content_info'>
                    { this.renderContentLeft("UpComing", "Movies", movies[0]) }
                </div>
                <div className = 'content_list'>
                    { this.renderContentList("Events", "Events", events) }
                </div>
                <div className = 'content_info'>
                    { this.renderContentLeft("Events", "Events", events[0]) }
                </div>
            </div>
        )
    }

    renderBody = () => {
        return (
            <div className = 'home_container'>
                <div className = 'home_header_slide'>
                    { this.renderHeaderTextContainer() }
                    { this.renderHeaderSlideFooter() }
                </div>
                <div className = 'home_body_container'>
                    { this.renderBodyContents() }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className = 'home_root_container'>
                { this.renderBody() }
            </div>
        )
    }
}

export default Home