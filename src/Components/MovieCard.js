import React from 'react'

//Material-UI
import { Grid , Divider, CardMedia, CardContent, Paper, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'

import rottenImg from '../assets/Icons/rotten.png'
import imdbImg from '../assets/Icons/imdb.png'

const useStyles = makeStyles({
    root: {
        border: "1px solid #AEB6BF",
        borderRadius: "10px",
        padding: "4px",
    },
    title: {
        fontSize: "0.7rem", 
        letterSpacing: "0.02rem", 
        fontWeight: "bold", 
        textTransform: "uppercase"
    },
    genreRoot: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row"
    },
    genreBlock: {
        display: "flex",
        flexDirection: "row",
        marginRight: "10px",
        marginTop: "20px"
    },
    genre: {
        color: "#000",
        marginRight: "7px",
        textTransform: "uppercase",
        letterSpacing: "0.02rem",
        fontSize: "0.6rem",
        fontWeight: "bold"
    },
    rateRoot: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "-3px"
    },
    rateIconRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    rateIcon: {
        width: "20px",
        marginRight: "5px"
    },
    rateValue: {
        color: "#000",
        fontSize: "0.85rem"
    },
})

const MovieCard = ({item}) => {
    const classes = useStyles()

    const {name, src, genre, rotten, imdb} = item

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

    const renderContent = () => (
        <CardContent sx = {{ flex: '1 0 auto' }}>
            <Typography component = "div" variant = "h6" className = {classes.title}> 
            {name}
            </Typography>
            { renderGenre() }
            { renderRatings() }
        </CardContent>
    )

    const renderMedia = () => (
        <CardMedia
            component = "img"
            image = {src}
            alt = {name}
            sx = {{height: "100%"}}
        />
    )

    return (
        <Paper elevation = {3} className = {classes.root}>
            <Grid container>
                <Grid item xs = {12} sm = {6} md = {7}>
                    { renderContent() }
                </Grid>
                <Grid item xs = {12} sm = {6} md = {5}>
                    { renderMedia() }
                </Grid>  
            </Grid>
        </Paper>
    )
}

export default MovieCard