import React from 'react'

import CustomButton from '../../Components/CustomCssButton/CustomButton'

//Material-UI
import { Grid, Button } from '@mui/material'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'

import './Home.css'
import image1 from '../../assets/CarouselImages/sample.jpg'

const ContentLeft = () => {

    const renderAttributeList = () => (
        <div className = "attribute_list">
            <ul>
                { ["1", "2", "3"].map(i => {
                    return (
                        <li>
                            <CheckCircleOutline sx = {{color: "#ff6347"}}/>
                            <span>Morbi tempus malesuada erat sed</span>
                        </li> 
                    )
                }) }
            </ul>
        </div>
    )

    const renderSectionTitle = () => (
        <div className = "section_title">
            <span>Now Showing</span>
            <h1>Spiderman No Way Home</h1>
        </div>
    )

    const renderSectionSynopsis = () => (
        <div className = "synopsis_container">
            <h2>Synopsis</h2>
            <p>Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque.</p>
        </div>
    )

    const renderSectionButton = () => (
        <div className = 'button_block'>
            <Button variant = "text" sx = {{color: "#ffffff", fontSize: "0.8rem"}} startIcon = {<SlowMotionVideoIcon/>}>
                Watch Trailer
            </Button>
            <CustomButton label = "Buy Tickets" variant = "outlined"/>
        </div>
    )

    return (
        <Grid container>
            <Grid item xs = {12} sm = {6} md = {5}>
                <div className = 'body_info_container'>
                    { renderSectionTitle() }
                    { renderSectionSynopsis() }
                    { renderAttributeList() }
                    { renderSectionButton() }
                </div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {7} sx = {{display: "flex"}}>
                <div className = 'content_img'>
                    <img src = {image1} alt = "carousel1"/>
                </div>
            </Grid>
        </Grid>
    )
}

export default ContentLeft