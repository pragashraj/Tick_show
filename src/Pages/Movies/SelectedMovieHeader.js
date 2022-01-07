import React from 'react'

//Material-UI
import { Grid, Paper, Rating, useMediaQuery, Typography, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import TimelapseIcon from '@mui/icons-material/Timelapse'

import rottenImg from '../../assets/Icons/rotten.png'
import imdbImg from '../../assets/Icons/imdb.png'
import starImg from '../../assets/Icons/star.png'

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "80vh"
    },
    backImg: props => ({
        position: 'relative',
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: "100%",
        width: "100%"
    }),
    infoRoot: props => ({
        height: "20vh",
        width: "100%",
        position: "absolute",
        bottom: props.mobile ? "40vh" : "20vh",
    }),
    infoContainer: {
        display: "flex",
        flexDirection: "column"
    },
    infoTitle: {
        color: "#fff",
        fontSize: "1.8rem",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontWeight: "bold"
    },
    footer: props => ({
        height: props.mobile ? "40vh" : "20vh",
        width: "100%",
        position: "absolute",
        bottom: "0",
        backgroundColor: "rgba(27, 79, 114, 0.5)",
    }),
    footerContainer: props => ({
        display: "flex",
        flexDirection: "row",
        height: props.mobile ? "40vh" : "20vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    }),
    card: props => ({
        width: "220px",
        height: "45vh",
        position: "absolute",
        bottom: "0",
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    }),
    rateRoot: props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: props.mobile && "15px",
        marginTop: props.mobile && "15px",
    }),
    rateIconRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50px"
    },
    rateIcon: {
        width: "40px",
        marginRight: "5px"
    },
    rateValue: {
        color: "#fff",
        fontSize: "1.5rem",
        fontWeight: "600"
    },
    rateName: {
        marginTop: "5px",
        alignItems: "center",
        justifyContent: "center",
    },
    rateNameValue: {
        color: "#fff",
        fontSize: "0.7rem",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.08rem"
    },
    duration: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem",
        color: "#ABEBC6",
    },
    genreRoot: {
        marginTop: "10px",
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
        letterSpacing: "0.005rem",
        fontSize: "0.65rem",
        fontWeight: "bold"
    },
    releaseRoot: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: "50px"
    },
    releaseName: {
        marginRight: "5px",
        color: "#ABEBC6",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontSize: "0.7rem"
    },
    releaseValue: {
        color: "#ABEBC6",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontSize: "0.7rem",
    },
    row: {
        display: "flex",
        flexDirection: "row" ,
        marginTop: "25px"
    }
})

const SelectedMovieHeader = ({movieItem, handleWatchTrailerOnClick}) => {
    const matches = useMediaQuery('(max-width:800px)')

    const {name, src, duration, genre, rotten, imdb, release, userRate = "4.6", url =  "Https://Google.com"} = movieItem

    const classes = useStyles({img: src, mobile: matches})

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
                        { genre.length - 1 !== idx && <Divider orientation = "vertical" style = {{ background: 'white' }} /> }
                    </div>
                )
            }) }
        </div>
    )

    const renderDuration = () => (
        <Typography variant = "subtitle1" component = "div" className = {classes.duration}>
            Duration: <TimelapseIcon/> {duration}
        </Typography>
    )

    const renderRateAction = (name, value) => (
        <div className = {classes.rateRoot}>
            <div className = {classes.rateIconRoot}>
                <Rating name = "rate"/>
                <span className = {classes.rateValue}>{value}</span>
            </div>
            <div className = {classes.rateName}>
                <span className = {classes.rateNameValue}>{name}</span>
            </div>
        </div>
    )

    const renderRate = (name, icon, value) => (
        <div className = {classes.rateRoot}>
            <div className = {classes.rateIconRoot}>
                <img src = {icon} alt = {name} className = {classes.rateIcon}/>
                <span className = {classes.rateValue}>{value}</span>
            </div>
            <div className = {classes.rateName}>
                <span className = {classes.rateNameValue}>{name}</span>
            </div>
        </div>
    )

    const renderTrailerCard = () => (
        <Paper elevation = {4} className = {classes.card} onClick = {() => handleWatchTrailerOnClick(url)}>
            <SlowMotionVideoIcon sx = {{color: "#fff", fontSize: "70px"}}/>
        </Paper>
    )

    const renderFooterItems = () => (
        <Grid container>
            <Grid item xs = {6} sm = {6} md = {3}>
                {renderRate("TomotoMeter", rottenImg, rotten)}
            </Grid>
            <Grid item xs = {6} sm = {6} md = {3}>
                {renderRate("Audience Socre", imdbImg, imdb)}
            </Grid>
            <Grid item xs = {6} sm = {6} md = {3}>
                {renderRate("User rating", starImg, userRate)}
            </Grid>
            <Grid item xs = {6} sm = {6} md = {3}>
                {renderRateAction("Rate it", "0.0")}
            </Grid>
        </Grid>
    )

    const renderfooterContainer = () => (
        <Grid container>
            <Grid item xs = {1} sm = {1} md = {2}/>
            <Grid item xs = {10} sm = {10} md = {8}>
                <Grid container>
                    <Grid item xs = {false} sm = {false} md = {3}>
                        { !matches && renderTrailerCard() }
                    </Grid>
                    <Grid item xs = {12} sm = {12} md = {9}>
                        <div className = {classes.footerContainer}>
                            { renderFooterItems() }
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs = {1} sm = {1} md = {2}/>
        </Grid>
    )

    const renderInfoContainer = () => (
        <div className = {classes.infoRoot}>
            <Grid container>
                <Grid item xs = {1} sm = {1} md = {4}/>
                <Grid item xs = {10} sm = {10} md = {8}>
                    <div className = {classes.infoContainer}>
                        <span className = {classes.infoTitle}>{name}</span>
                        { renderGenre() }
                        <div className = {classes.row}>
                            { renderReleaseData() }
                            { renderDuration() }
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

    return (
        <div className = {classes.root}>
            <div className = {classes.backImg}>
                <div className = 'overlay'/>
                { renderInfoContainer() }
                <div className = {classes.footer}>
                    { renderfooterContainer() }
                </div>
            </div>
        </div>
    )
}

export default SelectedMovieHeader
