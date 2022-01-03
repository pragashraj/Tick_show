import React, { Component } from 'react'

import Sorter from '../../Components/Sorter'
import TheatreListItem from '../../Components/TheatreListItem'

//Material-UI
import Grid from '@mui/material/Grid'

import './Theatres.css'
import theatreImage from '../../assets/images/Theatres.jpg'

class Theatres extends Component {
    state = {
        location: "Colombo",
        experience: "2D",
        theatreList: []
    }

    sort_data = [
        {name: "location", label: "Location", menuItems: ["Colombo", "Jaffna"]},
        {name: "experience", label: "Experience", menuItems: ["2D", "3D"]}
    ]

    componentDidMount() {
        //for creating dummy data list
        this.createDataBlock()
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

    renderTheatreListItem = (item, idx) => {
        return (
            <Grid item xs = {12} sm = {6} md = {6} key = {idx}>
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
        const {location, experience} = this.state
        const values = {location, experience}
        return (
            <Sorter 
                sort_data = {this.sort_data} 
                handleChange = {this.handleSortOnChange}
                values = {values}
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
        return (
            <div className = 'theatres_root_container'>
                <div className = 'theatres_header'>
                    <h1>Explore More Theatres</h1>
                </div>
                <div className = 'theatre_parallax'>
                    <div className = 'theatres_block'>
                        <h1>Our Theatres</h1>
                        { this.renderTheatresBlockExtended() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Theatres