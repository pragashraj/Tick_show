import React from 'react'

//Material-UI
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import TimelapseIcon from '@mui/icons-material/Timelapse'

import rottenImg from '../assets/Icons/rotten.png'
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
    duration: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem",
        color: "#ABEBC6",
    },
    genreRoot: {
        marginTop: "25px",
        display: "flex",
        flexDirection: "row"
    },
    genreBlock: {
        display: "flex",
        flexDirection: "row",
        marginRight: "10px"
    },
    genre: {
        color: "#E5E8E8",
        marginRight: "15px",
        textTransform: "uppercase",
        letterSpacing: "0.02rem",
        fontSize: "0.8rem"
    },
    releaseRoot: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    releaseName: {
        marginRight: "5px",
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontSize: "0.7rem"
    },
    releaseValue: {
        color: "#D5D8DC",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontSize: "0.7rem"
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
    },
    footerTrailerLink: {
        display: "flex",
        flexDirection: "row",
    }
})

const MovieItem = ({item}) => {
    const classes = useStyles()

    const {name, src, duration, genre, rotten, imdb, release} = item

    const renderButton = (icon, label) => (
        <Button variant = "text" sx = {{color: "#ffffff", fontSize: "0.8rem"}} startIcon = {icon}>
            {label}
        </Button>
    )

    const renderIconButton = () => (
        <IconButton
            size = "medium"
            edge = "start"
            aria-haspopup = "true"
            sx = {{color: "#ffffff", marginRight: "15px", backgroundColor: "rgba(0, 0, 0, 0.1)"}}
        >
            <FavoriteIcon />
        </IconButton>
    )

    const renderFooter = () => (
        <div className = {classes.footerRoot}>
            <div className = {classes.footerBtnBlock}>
                { renderIconButton() }
                { renderButton(<ConfirmationNumberIcon />, "Buy Tickets") }
            </div>
            <div className = {classes.footerTrailerLink}>
                { renderButton(<SlowMotionVideoIcon />, "Watch trailer") }
            </div>
        </div>
    )

    const renderRatings = () => (
        <div className = {classes.rateRoot}>
            <div className = {classes.rateIconRoot}>
                <img src = {rottenImg} alt = "rotten" className = {classes.rateIcon}/>
                <span className = {classes.rateValue}>{rotten}</span>
            </div>
            <div className = {classes.rateIconRoot}>
                <img src = {imdbImg} alt = "rotten" className = {classes.rateIcon}/>
                <span className = {classes.rateValue}>{imdb}</span>
            </div>
        </div>
    )

    const renderReleaseData = () => (
        <div className = {classes.releaseRoot}>
            <span className = {classes.releaseName}>Release : </span>
            <span className = {classes.releaseValue}>{release}</span>
        </div>
    )

    const renderGenre = () => (
        <div className = {classes.genreRoot}>
            { genre.map((i, idx) => {
                return ( 
                    <div className = {classes.genreBlock} key = {idx}>
                        <span className = {classes.genre}>{i}</span>
                        { genre.length - 1 !== idx && <Divider orientation = "vertical" style = {{ background: 'black' }} /> }
                    </div>
                )
            }) }
        </div>
    )

    const renderDuration = () => (
        <Typography variant = "subtitle1" color = "text.secondary" component = "div" className = {classes.duration}>
            <TimelapseIcon/> {duration}
        </Typography>
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
                { renderDuration() }
                { renderGenre() }
                { renderReleaseData() }
                { renderRatings() }
                <Divider/>
                { renderFooter() }
                <Divider/>
            </div>
        )
    }

    const renderMedia = () => (
        <CardMedia
            component = "img"
            sx = {{ height: "100%" }}
            image = {src}
            alt = {name}
        />
    )

    return (
        <div className = {classes.root}>
            <Grid container spacing = {4}>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderMedia() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {8}>
                    { renderContent() }
                </Grid>
            </Grid>
        </div>
    )
}

export default MovieItem