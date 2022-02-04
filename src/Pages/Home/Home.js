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
import Loading from '../../Components/Loading/Loading'
import SnackBarAlert from '../../Components/SnackBarAlert'

import {getContents, searchMovie} from '../../api/home'

import './Home.css'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

function withNavigate(Component) {
    return props => <Component {...props} navigate = {useNavigate()}/>
}

class Home extends Component {
    state = {
        movies: [],
	    upcomingMovies: [],
        events: [],
        theatres: [],
        movieSearchValue: "",
        selectorTitle: "",
        openSelector: false,
        cityOptions: ["Colombo", "Ja-ela", "Negombo"],
        city: "Colombo",
        date: new Date(),
        experienceOptions: ["2D", "3D"],
        experience: "2D",
        loading: false,
        message: "",
        severity: "",
        openSnackBar: false,
    }

    carouselImages = [
        {url: slideShowImage}
    ]

    componentDidMount() {
        this.getContentsApi()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    getContentsApi = async() => {
        try {
            this.setState({loading: true})
            const response = await getContents()
            if (response) {
                this.setState({
                    movies: response.moviePage.movies,
		            upcomingMovies: response.upcomingMoviePage.movies,
                    events: response.eventPage.events,
                    theatres: response.theatrePage.theatres,
                    cityOptions: response.locations
                })
            }
            this.setState({loading: false})
        } catch (e) {
            this.setState({loading: false})
        }
    }

    searchMovieApi = async(data) => {
        try {
            this.setState({loading: true})
            const response = await searchMovie(data)
            console.log(response)
            this.setState({loading: false, movieSearchValue: "", city: "Colombo", date: new Date(), experience: "2D"})
        } catch (e) {
            this.setState({loading: false})
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleSearchOnClick = () => {
        const {movieSearchValue, city, date, experience} = this.state
        if (movieSearchValue) {
            const data = { name: movieSearchValue, city, date, experience}
            this.searchMovieApi(data)
        } 
        else {
            this.setErrorSnackBar("fields cannot be empty")
        }
    }

    handleSelectorOnClick = (title) => {
        this.setState({ selectorTitle: title, openSelector: true })
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
        this.setState({openSelector: false, city: citySelected, date: dateSelected, experience: expSelected})
    }

    handleSelectorOkOnClick = () => {
        this.setState({ selectorTitle: "", openSelector: false })
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

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    getSelectorOptions = (label) => {
        const {cityOptions, experienceOptions} = this.state
        let options = []

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
        const {movies, upcomingMovies, events, theatres} = this.state
        return (
            <div className = 'home_parallax'>
                <div className = 'content_list'>
                    { this.renderContentList("Movies", "Movies", movies) }
                </div>
                <div className = 'content_list'>
                    { this.renderContentList("Movies", "Upcoming Movies", upcomingMovies) }
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
        const {selectorTitle, openSelector} = this.state
        return (
            <ConfirmationDialog
                open = {openSelector}
                title = {selectorTitle}
                options = {this.getSelectorOptions(selectorTitle)}
                handleChange = {this.handleInputOnChange}
                handleOkOnClick = {this.handleSelectorOkOnClick}
                cancelOnClick = {this.handleSelectorCancelOnClick}
            />
        )
    }

    render() {
        const {openSelector, loading, openSnackBar, severity, message} = this.state
        return (
            <div className = 'home_root_container'>
                { this.renderBody() }
                { openSelector && this.renderConfirmDialog() }
                <Loading open = {loading}/>
                <SnackBarAlert 
                    open = {openSnackBar} 
                    severity = {severity} 
                    message = {message} 
                    handleClose = {this.handleSnackBarClose}
                />
            </div>
        )
    }
}

export default withNavigate(Home)