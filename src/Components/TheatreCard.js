import React from 'react'

//Material-UI
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { makeStyles } from '@mui/styles'

import rottenImg from '../assets/Icons/rotten.png'

const useStyles = makeStyles({
    root: {
        border: "1px solid #AEB6BF",
        borderRadius: "10px",
        padding: "4px",
        background: "transparent"
    },
    title: {
        fontSize: "0.9rem", 
        letterSpacing: "0.05rem", 
        fontWeight: "bold", 
        textTransform: "uppercase",
        color: "#fff",
    },
    subtitle: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem",
        fontWeight: "bold"
    },
    cardContent: {
        flex: '1 0 auto'
    },
    cardMedia: {
        height: "25vh"
    },
    timeSlots: {
        display: 'flex',
    },
    slotBtn: {
        color: "#ffffff",
    },
    rateIconRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "-7px",
        marginTop: "15px"
    },
    rateIcon: {
        width: "35px",
        marginRight: "5px"
    },
    rateValue: {
        color: "#000",
        fontSize: "0.85rem",
        fontWeight: "bold"
    },
})

const TheatreCard = ({item}) => {
    const classes = useStyles()

    const {name, src, location, contact, timeSlots} = item

    const renderRatings = () => (
        <div className = {classes.rateRoot}>
            <div className = {classes.rateIconRoot}>
                <img src = {rottenImg} alt = "rotten" className = {classes.rateIcon}/>
                <span className = {classes.rateValue}>{"95%"}</span>
            </div>
        </div>
    )

    const renderContent = () => (
        <CardContent className = {classes.cardContent}>
            <Typography component = "div" variant = "h4" className = {classes.title}> 
                {name}
            </Typography>
            <Typography variant = "subtitle1" component = "div" className = {classes.subtitle}>
                {location}
            </Typography>
            <Typography variant = "subtitle1" component = "div" className = {classes.subtitle}>
                {contact}
            </Typography>
            { renderRatings() }
        </CardContent>
    )

    const renderMedia = () => (
        <CardMedia
            component = "img"
            image = {src}
            alt = {name}
            className = {classes.cardMedia}
        />
    )

    const renderTimeSlots = () => (
        <Box className = {classes.timeSlots}>
            <ButtonGroup size = "small" aria-label = "outlined button group">
                { timeSlots.map((i, idx) => <Button key = {idx} className = {classes.slotBtn}>{i}</Button>) }
            </ButtonGroup>
        </Box>
    )

    return (
        <Paper elevation = {3} className = {classes.root}>
            <Grid container>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { renderMedia() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {12}>
                    <Box sx = {{ display: 'flex', flexDirection: 'column' }}>
                        { renderContent() }
                        { renderTimeSlots() }
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TheatreCard
