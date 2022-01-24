import React, { Component } from 'react'

import { useNavigate } from "react-router-dom"

//Material-UI
import { Grid } from '@mui/material'
import EditLocation from '@mui/icons-material/EditLocation'
import CalendarToday from '@mui/icons-material/CalendarToday'
import AccessibilityNew from '@mui/icons-material/AccessibilityNew'

import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomSearch from './CustomSearch'
import SelectorDropDown from './SelectorDropDown'
import ContentList from '../../Components/ContentList/ContentList'
import SlideShow from '../../Components/SlideShow/SlideShow'
import ConfirmationDialog from '../../Components/ConfirmationDialog'
import DateSelector from '../../Components/DateSelector/DateSelector'

import './Home.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import eventSample from '../../assets/images/event_sample.jpg'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'
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
        cityOptions: ["Colombo", "Ja-ela", "Negombo"],
        city: "Colombo",
        date: new Date(),
        experienceOptions: ["2D", "3D"],
        experience: "2D",
    }

    dummySynopsis = "Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque."

    carouselImages = [
        {url: slideShowImage},
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
        const {movieSearchValue, city, date, experience} = this.state

        if (movieSearchValue) {
            const data = { name: movieSearchValue, city, date, experience}
            console.log(data)
            this.setState({
                movieSearchValue: "",
                city: "Colombo",
                date: new Date(),
                experience: "2D"
            })
        } 
        else {
            console.log("Alert: fields cannot be empty")
        }
    }

    handleSelectorOnClick = (title) => {
        this.setState({ selectorTitle: title, openSeletor: true })
    }

    handleSelectorCancelOnClick = (title) => {
        const {city, date, experience} = this.state
        let citySelected = city
        let dateSelected = date
        let expSelected = experience
        if (title === "city") {
            citySelected = "Colombo"
        }
        else if (title === "date") {
            dateSelected = new Date()
        }
        else if (title === "experience") {
            expSelected = "2D"
        }
        this.setState({openSeletor: false, city: citySelected, date: dateSelected, experience: expSelected})
    }

    handleSelectorOkOnClick = () => {
        this.setState({ selectorTitle: "", openSeletor: false })
    }

    handleCardOnClick = (item, href) => {
        this.props.navigate(href, { state: item })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleDateOnChange = (date) => {
        this.setState({ date: date })
    }

    getSelectorOptions = (label) => {
        const {cityOptions, experienceOptions} = this.state
        let options
        switch (label) {
            case "city": options = cityOptions
                break
            case "experience": options = experienceOptions
                break
            default: options = []
        }

        return options
    }

    renderDatePicker = (label, value, icon) => {
        return (
            <DateSelector
                label = {label}
                value = {value}
                icon = {icon}
                onChange = {this.handleDateOnChange}
            />
        )
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
                            { this.renderSelector("city", city, EditLocation) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderDatePicker("date", date, CalendarToday) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {2}>
                            { this.renderSelector("experience", experience, AccessibilityNew) }
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

    renderConfirmDialog = () => {
        const {selectorTitle, openSeletor} = this.state
        return (
            <ConfirmationDialog
                open = {openSeletor}
                title = {selectorTitle}
                options = {this.getSelectorOptions(selectorTitle)}
                handleChange = {this.handleInputOnChange}
                handleOkOnClick = {this.handleSelectorOkOnClick}
                cancelOnClick = {this.handleSelectorCancelOnClick}
            />
        )
    }

    render() {
        const {openSeletor} = this.state
        return (
            <div className = 'home_root_container'>
                { this.renderBody() }
                { openSeletor && this.renderConfirmDialog() }
            </div>
        )
    }
}

export default withNavigate(Home)