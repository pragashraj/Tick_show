import React, { Component } from 'react'

//Material-UI
import Grid from '@mui/material/Grid'

import Sorter from '../../Components/Sorter'
import TheatreListItem from '../../Components/TheatreListItem'
import SlideShow from '../../Components/SlideShow/SlideShow'
import Loading from '../../Components/Loading/Loading'

import {getTheatres} from '../../api/theatres'

import './Theatres.css'
import theatreImage from '../../assets/images/Theatres.jpg'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

class Theatres extends Component {
    state = {
        location: "Colombo",
        experience: "2D",
        theatreList: [],
        total: 1,
        current: 1,
        dataListType: "Grid",
        loading: false,
    }

    sort_data = [
        {name: "location", label: "Location", menuItems: ["Colombo", "Jaffna"]},
        {name: "experience", label: "Experience", menuItems: ["2D", "3D"]}
    ]

    images = [
        {url: slideShowImage},
    ]

    componentDidMount() {
        //for creating dummy data list
        this.createDataBlock()
    }

    getTheatresApi = async(page, size) => {
        try {
            this.setState({ loading: true })
            const response = await getTheatres(page, size)
            if (response) {
                this.setState({ theatreList: response.movies, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
        }
    }

    createDataBlock = () => {
        const theatre = {
            name: "Ja-ela Cinemax", 
            src: theatreImage, 
            address: "Negombo-Colombo Main Rd, Ja-Ela 11350", 
            contact: "0117 549 650", 
            imdb: "99%",
            timeSlots: ["5:00 am", "8:00 am", "11:00 am", "4:00 pm", "7:00 pm", "10:00 pm"] 
        }

        const dummyArr = ["1", "2", "3", "4"]
        let data = []

        dummyArr.forEach(e => {
            data.push(theatre)
        })

        this.setState({ theatreList: data })
    }

    handleSortOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleTimeSlotOnClick = () => {

    }

    handleLikeOnClick = () => {
        
    }

    handleListTypeIconOnClick = (value) => {
        this.setState({ dataListType: value })
    }

    renderTheatreListItem = (item, idx) => {
        const {dataListType} = this.state
        let no = dataListType === "Grid" ? 6 : 12
        return (
            <Grid item xs = {12} sm = {no} md = {no} key = {idx}>
                <TheatreListItem 
                    item = {item}
                    handleLikeOnClick = {this.handleLikeOnClick}
                    handleTimeSlotOnClick = {this.handleTimeSlotOnClick}
                />
            </Grid>
        )
    }

    renderTheatresList = () => {
        const {theatreList} = this.state
        return (
            <div className = 'theatres_list'>
                <Grid container spacing = {2}>
                    { theatreList.map((i, idx) => this.renderTheatreListItem(i, idx)) }
                </Grid>
            </div>
        )
    }

    renderSort = () => {
        const {location, experience, dataListType} = this.state
        const values = {location, experience, dataListType}
        return (
            <Sorter 
                sort_data = {this.sort_data} 
                values = {values}
                handleChange = {this.handleSortOnChange}
                handleListTypeIconOnClick = {this.handleListTypeIconOnClick}
            />
        )
    }

    renderTheatresBlockExtended = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { this.renderSort() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { this.renderTheatresList() }
                </Grid>
            </Grid>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'theatres_root_container'>
                <div className = 'theatres_header'>
                    <SlideShow images = {this.images}/>
                    <h1>Explore More Theatres</h1>
                </div>
                <div className = 'theatre_parallax'>
                    <div className = 'theatres_block'>
                        <h1>Our Theatres</h1>
                        { this.renderTheatresBlockExtended() }
                    </div>
                </div>
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default Theatres