import React, {useState, useEffect} from 'react'

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
    container: {
        display: "flex",
        position: "absolute",
        width: "40%",
        marginLeft: "7%",
        height: "88%"
    }
})

const ContentLeft = ({title, type, item, handleWatchTrailerOnClick, handleBuyTicketsOnClick}) => {
    const classes = useStyles()
    
    const [data, setData] = useState({
        name: "",
        description: "",
        src: null
    })

    useEffect(() => {
        let data_name = ""
        let data_description = ""
        let data_src = null
        if (item) {
            data_name = item.name
            data_src = item.src
            if (type === "Movies") {
                data_description = item.synopsis
            }
            else {
                data_description = item.description
            }
        }
        setData({name: data_name, description: data_description, src: data_src})
    }, [item, type])

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

    const renderSectionSynopsis = () => (
        <div className = "synopsis_container">
            <h2>Synopsis</h2>
            <p>{data.description}</p>
        </div>
    )

    const renderSectionTitle = () => (
        <div className = "section_title">
            <span>{title}</span>
            <h1>{data.name}</h1>
        </div>
    )

    return (
        <div container className = {classes.root}>
            <SlideShow images = {[{url: data.src}]}/>
            <div className = {classes.container}>
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