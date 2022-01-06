import React, { Component } from 'react'

import SelectedMovieHeader from './SelectedMovieHeader'
import Cast from '../../Components/CastAndCrew/Cast'
import Crew from '../../Components/CastAndCrew/Crew'
import InputField from '../../Components/InputField'
import TheatreSelection from './TheatreSelection'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'
import TheatreSeatSelection from '../../Components/TheatreSeatSelection'

//Material-UI
import { Grid, Card, CardMedia, Divider, IconButton } from '@mui/material'
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'

import './Movies.css'
import headerImg from '../../assets/images/movie_sample.jpg'

class SelectedMovie extends Component {
    state = {
        openSeatAllocation: false
    }

    handleContinueOnClick = () => {
        this.handleSeatAllocationPopup()
    }

    handleCancelOnClick = () => {

    }

    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSeatAllocationPopup = () => {
        this.setState({ openSeatAllocation: !this.state.openSeatAllocation })
    }

    renderInputField = (label, readOnly) => {
        return (
            <InputField 
                label = {label} 
                type = "number" 
                readOnly = {readOnly} 
                handleOnChange = {this.handleOnChange}
            />
        )
    }

    renderTheatreSelection = () => {
        return (
            <div className = 'buy_tickets_block'>
                <h3 className = 'sub_header_text'>Select Theatre & Time Slot</h3>
                <div className = 'count_block'>
                    <Grid container>
                        { ["1", "2", "3"].map((i, idx) =>{
                            return (
                                <Grid item xs = {12} sm = {12} md = {12} key = {idx} sx = {{marginBottom: "15px"}}>
                                    <TheatreSelection/>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </div>
            </div>
        )
    }

    renderTicketSelection = () => {
        return (
            <div className = 'buy_tickets_block'>
                <h3 className = 'sub_header_text'>How Many Tickets ?</h3>
                <div className = 'count_block'>
                    <Grid container spacing = {2}>
                        <Grid item xs = {6} sm = {6} md = {4}>
                            { this.renderInputField("No of full tickets", false) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {4}>
                            { this.renderInputField("No of Kids tickets", false) }
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {4}>
                            { this.renderInputField("Total tickets", true) }
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    renderIconButton = (type) => {
        return (
            <IconButton
                sx = {{
                    color: "#ffffff", 
                    marginRight: "5px",
                    width: "17px", 
                    height: "17px", 
                }}
            >
            { type === "prev" ? <ArrowBackIos sx = {{width: "15px", height: "15px"}}/> : <ArrowForwardIos sx = {{width: "15px"}}/> }
            </IconButton>
        )
    }

    renderCast_CrewHeader = (subHeader) => {
        return (
            <div className = 'cast_crew_sub_header_block'>
                <h3 className = 'sub_header_text'>{subHeader}</h3>
                <div className = 'cast_crew_sub_header_icon'>
                    { this.renderIconButton("prev") }
                    { this.renderIconButton("next") }
                </div>
            </div>
        )
    }

    renderCrew = () => {
        return (
            <div className = 'summary_block'>
                { this.renderCast_CrewHeader("Crew") }
                <Divider sx = {{background: "rgba(0, 0, 0, 0.1)", marginBottom: "10px"}}/>
                <div className = 'summary_block_list'>
                    <Grid container>
                        { ["1", "2", "3", "4", "5", "6"].map((i, idx) => {
                            return (
                                <Grid item xs = {4} sm = {3} md = {2} key = {idx}>
                                    <Crew/>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </div>
            </div>
        )
    }

    renderCast = () => {
        return (
            <div className = 'summary_block'>
                { this.renderCast_CrewHeader("Cast") }
                <Divider sx = {{background: "rgba(0, 0, 0, 0.1)", marginBottom: "10px"}}/>
                <div className = 'summary_block_list'>
                    <Grid container>
                        { ["1", "2", "3", "4", "5", "6"].map((i, idx) => {
                            return (
                                <Grid item xs = {4} sm = {3} md = {2} key = {idx}>
                                    <Cast/>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </div>
            </div>
        )
    }

    renderSynopsis = () => {
        return (
            <div className = 'summary_block'>
                <h3 className = 'sub_header_text'>Synopsis</h3>
                <div className = 'synopsis_value'>
                    <p>
                    Maecenas sollicitudin tincidunt maximus. 
                    Morbi tempus malesuada erat sed pellentesque. 
                    Donec pharetra mattis nulla, id laoreet neque scelerisque at. 
                    Quisque eget sem non ligula consectetur ultrices in quis augue. 
                    Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. 
                    Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. 
                    Morbi tempus malesuada erat sed pellentesque.
                    </p>
                </div>
            </div>
        )
    }

    renderBuyTickets = () => {
        return (
            <div className = 'buy_tickets_container'>
                <h2 className = 'header_text'>Buy Tickets</h2>
                <Divider sx = {{background: "#fff"}}/>
                { this.renderTicketSelection() }
                { this.renderTheatreSelection() }
                <div className = 'buy_tickets_block'>
                    <div className = 'btn_footer_container'></div>
                    <Grid container spacing = {2}>
                        <Grid item xs = {6} sm = {6} md = {6}>
                            <SecondaryButton label = "Cancel" onClick = {this.handleCancelOnClick}/>
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {6}>
                            <CustomButton label = "Continue" onClick = {this.handleContinueOnClick}/>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        )
    }

    renderSummary = () => {
        return (
            <div className = 'summary_container'>
                <h2 className = 'header_text'>Summary</h2>
                <Divider sx = {{background: "#fff"}}/>
                { this.renderSynopsis() }
                { this.renderCast() }
                { this.renderCrew() }
            </div>
        )
    }

    renderPhotoGallery = () => {
        return (
            <div className = 'photo_gallery_container'>
                <h2 className = 'header_text'>Photos</h2>
                <Divider sx = {{background: "#fff"}}/>
                <div className = 'gallery_block'>
                    <Grid container spacing = {2}>
                        { ["1", "2", "3", "4"].map((i, idx) => {
                            return (
                                <Grid item xs = {6} sm = {4} md = {3} key = {idx}>
                                    <Card>
                                        <CardMedia component = "img" image = {headerImg} alt = "gal" sx = {{ height: "20vh" }}/>
                                    </Card>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </div>
            </div>
        )
    }
    
    renderMainContainer = () => {
        return (
            <div className = 'sel_movie_main_container'>
                { this.renderPhotoGallery() }
                { this.renderSummary() }
                { this.renderBuyTickets() }
            </div>
        )
    }

    render() {
        const {openSeatAllocation} = this.state
        return (
            <div className = 'selected_movie_root'>
                <SelectedMovieHeader src = {headerImg}/>
                <div className = 'movie_parallax'>
                    <div className = 'selected_block'>
                        { this.renderMainContainer() }
                    </div>
                </div>
                <TheatreSeatSelection open = {openSeatAllocation} handleClose = {this.handleSeatAllocationPopup}/>
            </div>
        )
    }
}

export default SelectedMovie