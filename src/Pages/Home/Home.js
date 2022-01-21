import React, { Component } from 'react'

import { useNavigate } from "react-router-dom"

import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomSearch from './CustomSearch'
import SelectorDropDown from './SelectorDropDown'
import ContentList from '../../Components/ContentList/ContentList'
import SlideShow from '../../Components/SlideShow/SlideShow'
import ConfirmationDialog from '../../Components/ConfirmationDialog'

//Material-UI
import { Grid } from '@mui/material'
import EditLocation from '@mui/icons-material/EditLocation'
import CalendarToday from '@mui/icons-material/CalendarToday'
import AccessibilityNew from '@mui/icons-material/AccessibilityNew'

import './Home.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import eventSample from '../../assets/images/event_sample.jpg'
import slideShowImage from '../../assets/CarouselImages/header_slider.jpg'
import theatreImage from '../../assets/images/Theatres.jpg'

function withNavigate(Component) {
    return props => <Component {...props} navigate = {useNavigate()}/>
}

class Home extends Component {
    state = {
        movies: [],
        events: [],
        theatres: [],
        movieSearchValue: "",
        selectorTitle: "",
        openSeletor: false,
        city: "Colombo",
        date: "31/12/2021",
        experience: "2D"
    }

    dummySynopsis = "Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque."

    carouselImages = [
        {url: slideShowImage}
    ]

    options = [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
    ]

    componentDidMount() {
        this.createDummyData()
        window.scrollTo({ top: 0, behavior: 'smooth' })
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

        const theatre = {
            name: "Ja-ela Cinemax", 
            src: theatreImage, 
            location: "Negombo-Colombo Main Rd, Ja-Ela 11350", 
            contact: "0117 549 650", 
            imdb: "99%"
        }

        const dummyArr = ["1", "2", "3", "4"]
        let events_Data = [], movies_Data = [], theatres_Data = []

        dummyArr.forEach(() => {
            movies_Data.push(movie)
            events_Data.push(event)
            theatres_Data.push(theatre)
        })

        this.setState({ movies: movies_Data, events: events_Data, theatres: theatres_Data })
    }

    handleSearchOnClick = () => {

    }

    handleWatchTrailerOnClick = () => {

    }

    handleSelectorOnClick = (title) => {
        this.setState({ selectorTitle: title, openSeletor: true })
    }

    handleSelectorCancelOnClick = () => {
        this.setState({ selectorTitle: "", openSeletor: false })
    }

    handleSelectorOkOnClick = () => {
        this.setState({ selectorTitle: "", openSeletor: false })
    }

    handleBuyTicketsOnClick = (movieItem) => {
        this.props.navigate(`/selectedMovie`, { state: movieItem })
    }

    handleCardOnClick = (item) => {
        this.props.navigate(`/movies`, { state: item })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    renderContentList = (type, title, dataList) => {
        return (
            <ContentList
                type = {type} 
                title = {title}
                listItems = {dataList}
                handleCardOnClick = {this.handleCardOnClick}
            />
        )
    }

    renderSelector = (label, value, icon) => {
        return (
            <SelectorDropDown
                label = {label}
                value = {value}
                icon = {icon}
                selectOnClick = {this.handleSelectorOnClick}
            />
        )
    }

    renderCustomSearch = () => {
        const {movieSearchValue} = this.state
        return (
            <CustomSearch 
                placeholder = "search for movies"
                name = "movieSearchValue"
                value = {movieSearchValue}
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
        const {movies, events, theatres} = this.state
        return (
            <div className = 'home_parallax'>
                <div className = 'content_list'>
                    { this.renderContentList("Movies", "Movies", movies) }
                </div>
                <div className = 'content_list'>
                    { this.renderContentList("Movies", "Upcoming Movies", movies) }
                </div>
                <div className = 'content_list'>
                    { this.renderContentList("Theatres", "Theatres", theatres) }
                </div>
                <div className = 'content_list'>
                    { this.renderContentList("Events", "Events", events) }
                </div>
            </div>
        )
    }

    renderBody = () => {
        return (
            <div className = 'home_container'>
                <SlideShow images = {this.carouselImages}/>
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
        const {selectorTitle, openSeletor} = this.state
        return (
            <div className = 'home_root_container'>
                { this.renderBody() }
                <ConfirmationDialog
                    open = {openSeletor}
                    title = {selectorTitle}
                    options = {this.options}
                    handleOkOnClick = {this.handleSelectorOkOnClick}
                    handleCancelOnClick = {this.handleSelectorCancelOnClick}
                />
            </div>
        )
    }
}

export default withNavigate(Home)