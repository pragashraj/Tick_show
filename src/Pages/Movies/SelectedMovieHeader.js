import React from 'react'

//Material-UI
import { Grid, Paper, Rating, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'

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
    infoRoot: {
        height: "20vh",
        width: "100%",
        position: "absolute",
        bottom: "20vh",
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
    }
})

const SelectedMovieHeader = ({src}) => {
    const matches = useMediaQuery('(max-width:800px)')
    const classes = useStyles({img: src, mobile: matches})

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
        <Paper elevation = {4} className = {classes.card}>
            <div className = 'overlay'/>
            <SlowMotionVideoIcon sx = {{color: "#fff", fontSize: "70px"}}/>
        </Paper>
    )

    const renderfooterContainer = () => (
        <Grid container>
            <Grid item xs = {false} sm = {false} md = {3}>
                { !matches && renderTrailerCard() }
            </Grid>
            <Grid item xs = {12} sm = {12} md = {9}>
                <div className = {classes.footerContainer}>
                    <Grid container>
                        <Grid item xs = {6} sm = {6} md = {3}>
                            {renderRate("TomotoMeter", rottenImg, "94%")}
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {3}>
                            {renderRate("Audience Socre", imdbImg, "94%")}
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {3}>
                            {renderRate("User rating", starImg, "4.5")}
                        </Grid>
                        <Grid item xs = {6} sm = {6} md = {3}>
                            {renderRateAction("Rate it", "0.0")}
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )

    return (
        <div className = {classes.root}>
            <div className = {classes.backImg}>
                <div className = {classes.infoRoot}></div>
                <div className = {classes.footer}>
                    <Grid container>
                        <Grid item xs = {1} sm = {1} md = {2}/>
                        <Grid item xs = {10} sm = {10} md = {8}>
                            { renderfooterContainer() }
                        </Grid>
                        <Grid item xs = {1} sm = {1} md = {2}/>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default SelectedMovieHeader
