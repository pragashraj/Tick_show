import React from 'react'

import CustomButton from '../../Components/CustomCssButton/CustomButton'

//Material-UI
import { Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'

import './Home.css'
import image2 from '../../assets/CarouselImages/2.jpg'


const useStyles = makeStyles({
    root: {
        display: "flex",
        border: "1px solid #AEB6BF",
        background: "transparent",
        borderRadius: "10px",
        padding: "4px"
    },
})

const ContentLeft = () => {
    const classes = useStyles()

    const renderAttributeList = () => (
        <div className = "attribute_list">
            <ul>
                { ["1", "2", "3"].map((i, idx) => {
                    return (
                        <li key = {idx}>
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
        <Grid container className = {classes.root}>
            <Grid item xs = {12} sm = {12} md = {4} sx = {{display: "flex"}}>
                <div className = 'body_info_container'>
                    { renderSectionTitle() }
                    { renderSectionSynopsis() }
                    { renderAttributeList() }
                    { renderSectionButton() }
                </div>
            </Grid>
            <Grid item xs = {12} sm = {12} md = {8} sx = {{display: "flex"}}>
                <img src = {image2} alt = "" style = {{width: "100%"}}/>
            </Grid>
        </Grid>
    )
}

export default ContentLeft