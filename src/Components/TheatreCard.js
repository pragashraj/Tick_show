import React from 'react'

//Material-UI
import {
    Box,
    CardMedia,
    CardContent,
    Paper,
    Typography,
    Grid,
    useMediaQuery
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FmdGood, Call } from '@mui/icons-material'

import starImg from '../assets/Icons/star.png'

const useStyles = makeStyles({
    root: {
        border: "1px solid #AEB6BF",
        borderRadius: "10px",
        padding: "4px",
        background: "transparent"
    },
    title: {
        fontSize: "0.7rem", 
        letterSpacing: "0.1rem", 
        fontWeight: "bold", 
        textTransform: "uppercase",
        color: "#fff",
    },
    location: props => ({
        fontSize: props.mobile ? "0.6rem" : "0.7rem", 
        letterSpacing: "0.08rem",
        fontWeight: "bold",
        color: "silver",
        marginTop: "10px",
        display: "flex",
        marginLeft: props.mobile ? "0px" : "5px",
        marginBottom: "5px"
    }),
    contact: props => ({
        fontSize: props.mobile ? "0.6rem" : "0.7rem", 
        letterSpacing: "0.08rem",
        fontWeight: "bold",
        color: "silver",
        display: "flex",
        marginLeft: props.mobile ? "0px" : "5px"
    }),
    cardContent: {
        flex: '1 0 auto'
    },
    cardMedia: {
        height: "25vh"
    },
    rateRoot: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    rateIconRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "-7px",
        marginTop: "15px"
    },
    icon: {
        width: "35px",
        marginRight: "5px",
        color: "#ABEBC6"
    },
    rateValue: {
        fontSize: "0.85rem",
        fontWeight: "bold",
        color: "#ABEBC6",
        marginLeft: "-8px"
    },
    rateIcon: {
        width: "30px",
        height: "28px",
        marginRight: "20px"
    },
})

const TheatreCard = ({item}) => {
    const matches = useMediaQuery('(max-width: 600px)')
    const classes = useStyles({mobile: matches})

    const {name, src, location, contact, imdb} = item

    const renderRatings = () => (
        <div className = {classes.rateRoot}>
        <img src = {starImg} alt = {name} className = {classes.rateIcon}/>
            <div className = {classes.rateIconRoot}>
                <span className = {classes.rateValue}>{imdb}</span>
            </div>
        </div>
    )

    const renderContent = () => (
        <CardContent className = {classes.cardContent}>
            <Typography component = "div" variant = "h4" className = {classes.title}> 
                {name}
            </Typography>
            <Typography variant = "subtitle1" component = "div" className = {classes.location}>
                <FmdGood className = {classes.icon}/> {location}
            </Typography>
            <Typography variant = "subtitle1" component = "div" className = {classes.contact}>
                <Call className = {classes.icon}/> {contact}
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

    return (
        <Paper elevation = {3} className = {classes.root}>
            <Grid container>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { renderMedia() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {12}>
                    <Box sx = {{ display: 'flex', flexDirection: 'column' }}>
                        { renderContent() }
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TheatreCard