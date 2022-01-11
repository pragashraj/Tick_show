import React, {useState, useEffect} from 'react'

import CustomButton from '../../Components/CustomCssButton/CustomButton'

//Material-UI
import { Grid, Button } from '@mui/material'
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
        padding: "4px"
    },
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
                <img src = {data.src} alt = {`${title} - ${data.name}`} style = {{width: "100%"}}/>
            </Grid>
        </Grid>
    )
}

export default ContentLeft