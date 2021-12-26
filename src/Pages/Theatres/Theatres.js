import React, { Component } from 'react'

import TheatreCard from '../../Components/TheatreCard'

//Material-UI
import Grid from '@mui/material/Grid'

import './Theatres.css'
import theatreImage from '../../assets/images/Theatres.jpg'

class Theatres extends Component {
    state = {
        theatreList: ["1", "2", "3", "4", "5", "6"]
    }

    renderTheatrCard = () => {
        return (
            <TheatreCard 
                title = {"Ja-ela Cinemax"}
                otherInfo = {{add: "Negombo-Colombo Main Rd, Ja-Ela 11350", no: "0117 549 650"}}
                imageSrc = {theatreImage}
                timeVariants = {["5:00 am", "8:00 am", "11:00 am", "4:00 pm", "7:00 pm", "10:00 pm"]}
            />
        )
    }

    renderTheatresList = () => {
        return (
            <div className = 'theatres_list'>
                <Grid container spacing = {2}>
                    { this.state.theatreList.map(i => {
                        return (
                            <Grid item xs = {12} sm = {6} md = {6}>
                                { this.renderTheatrCard() }                
                            </Grid>
                        )
                    }) }
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <div className = 'theatres_root_container'>
                <div className = 'theatres_header'>
                    <h1>Explore More Theatres</h1>
                </div>
                <div className = 'parallax'>
                    <div className = 'theatres_block'>
                        <h1>Our Theatres</h1>
                        { this.renderTheatresList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Theatres