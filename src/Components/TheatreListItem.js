import React from 'react'

//Material-UI
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { makeStyles } from '@mui/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'

import imdbImg from '../assets/Icons/imdb.png'

const useStyles = makeStyles({
    root: {
        display: "block",
        border: "1px solid #2C3E50",
        borderRadius: "10px",
        padding: "4px"
    },
    title: {
        fontSize: "0.9rem", 
        letterSpacing: "0.05rem", 
        fontWeight: "bold", 
        textTransform: "uppercase",
        color: "#ffffff"
    },
    infoRoot: {
        display: "flex",
        flexDirection: "row"
    },
    infoIcon: {
        color: "#ABEBC6",
        width: "15px"
    },
    infoValue: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem",
        color: "#ABEBC6",
        marginLeft: "10px"
    },
    rateRoot: {
        marginTop: "15px",
        marginBottom: "15px"
    },
    rateIconRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    rateIcon: {
        width: "20px",
        marginRight: "10px"
    },
    rateValue: {
        color: "#ffffff",
        fontSize: "0.85rem"
    },
    footerRoot: {
        padding: "5px",
        display: "flex",
        justifyContent: "space-between"
    },
    footerBtnBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    timeSlots: {
        display: "flex",
        flexDirection: "row",
    }
})

const TheatreListItem = ({item, handleLikeOnClick, handleTimeSlotOnClick}) => {
    const classes = useStyles()

    const {name, src, address, contact, imdb, timeSlots} = item

    const renderTimeSlots = () => (
        <ButtonGroup variant = "outlined" size = "small" aria-label = "small button group">
            { timeSlots.map((i, idx) => {
                return (
                    <Button 
                        sx = {{color: "#ffffff", border: "1px solid #fff"}}
                        onClick = {handleTimeSlotOnClick}
                        key = {idx}
                    >
                        {i}
                    </Button>
                )
            }) }
        </ButtonGroup>
    )

    const renderIconButton = () => (
        <IconButton
            size = "medium"
            edge = "start"
            aria-haspopup = "true"
            sx = {{color: "#ffffff", marginRight: "15px", backgroundColor: "rgba(0, 0, 0, 0.1)"}}
            onClick = {handleLikeOnClick}
        >
            <FavoriteIcon />
        </IconButton>
    )

    const renderFooter = () => (
        <div className = {classes.footerRoot}>
            <div className = {classes.footerBtnBlock}>
                { renderIconButton() }
            </div>
            <div className = {classes.timeSlots}>
                { renderTimeSlots() }
            </div>
        </div>
    )

    const renderRatings = () => (
        <div className = {classes.rateRoot}>
            <div className = {classes.rateIconRoot}>
                <img src = {imdbImg} alt = "rotten" className = {classes.rateIcon}/>
                <span className = {classes.rateValue}>{imdb}</span>
            </div>
        </div>
    )

    const renderContact = () => (
        <div className = {classes.infoRoot}>
            <CallIcon className = {classes.infoIcon}/>
            <Typography variant = "subtitle1" color = "text.secondary" component = "div" className = {classes.infoValue}>
                {contact}
            </Typography>
        </div>
    )

    const renderAddress = () => (
        <div className = {classes.infoRoot}>
            <LocationOnIcon className = {classes.infoIcon}/>
            <Typography variant = "subtitle1" color = "text.secondary" component = "div" className = {classes.infoValue}>
                {address}
            </Typography>
        </div>
    )

    const renderTitle = () => (
        <Typography component = "div" variant = "h6" className = {classes.title}> 
            {name}
        </Typography>
    )

    const renderContent = () => {
        return (
            <div>
                { renderTitle() }
                { renderAddress() }
                { renderContact() }
                { renderRatings() }
                <Divider/>
                { renderFooter() }
                <Divider/>
            </div>
        )
    }

    const renderMedia = () => (
        <CardMedia component = "img" sx = {{ height: "100%" }} image = {src} alt = {name}/>
    )

    return (
        <div className = {classes.root}>
            <Grid container spacing = {4}>
                <Grid item xs = {12} sm = {12} md = {3}>
                    { renderMedia() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {9}>
                    { renderContent() }
                </Grid>
            </Grid>
        </div>
    )
}

export default TheatreListItem