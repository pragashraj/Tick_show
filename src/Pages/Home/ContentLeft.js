import React from 'react'

import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SlideShow from '../../Components/SlideShow/SlideShow'

//Material-UI
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'

import './Home.css'

const useStyles = makeStyles({
    root: {
        display: "flex",
        border: "1px solid #AEB6BF",
        background: "transparent",
        borderRadius: "10px",
        padding: "5px"
    },
    mainContainer: {
        display: "flex",
        position: "absolute",
        width: "40%",
        marginLeft: "7%",
        height: "88%"
    }
})

const ContentLeft = ({title, type, item, handleWatchTrailerOnClick, handleBuyTicketsOnClick}) => {
    const classes = useStyles()
    
    const {name, src} = item
    const description = type === "Movies" ? item.synopsis : item.description
    const attributes = ["1", "2", "3"]

    const slideShowImages = [
        { url: src },
    ]

    const renderWatchTrailerBtn = () => (
        <Button 
            variant = "text" 
            sx = {{color: "#ffffff", fontSize: "0.8rem"}} 
            startIcon = {<SlowMotionVideoIcon/>}
            onClick = {handleWatchTrailerOnClick}
        >
            Watch Trailer
        </Button>
    )

    const renderSectionButton = () => (
        <div className = 'button_block'>
            { type === "Movies" && renderWatchTrailerBtn() }
            <CustomButton 
                label = "Buy Tickets" 
                variant = "outlined"
                onClick = {handleBuyTicketsOnClick}    
            />
        </div>
    )

    const renderAttributeList = () => (
        <div className = "attribute_list">
            <ul>
                { attributes.map((i, idx) => {
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

    const renderSectionSynopsis = () => (
        <div className = "synopsis_container">
            <h2>Synopsis</h2>
            <p>{description}</p>
        </div>
    )

    const renderSectionTitle = () => (
        <div className = "section_title">
            <span>{title}</span>
            <h1>{name}</h1>
        </div>
    )

    return (
        <div className = {classes.root}>
            <SlideShow images = {slideShowImages}/>
            <div className = {classes.mainContainer}>
                <div className = 'body_info_container'>
                    { renderSectionTitle() }
                    { renderSectionSynopsis() }
                    { renderAttributeList() }
                    { renderSectionButton() }
                </div>
            </div>
        </div>
    )
}

export default ContentLeft