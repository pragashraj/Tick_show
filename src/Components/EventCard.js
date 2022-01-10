import React from 'react'

//Material-UI
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { AttachMoney, FmdGood, Call } from '@mui/icons-material'

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
    location: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem",
        fontWeight: "bold",
        color: "silver",
        marginTop: "10px",
        display: "flex",
        marginLeft: "10px",
        marginBottom: "5px"
    },
    contact: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem",
        fontWeight: "bold",
        color: "silver",
        display: "flex",
        marginLeft: "10px"
    },
    cardContent: {
        flex: '1 0 auto'
    },
    cardMedia: {
        height: "25vh"
    },
    priceRoot: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },
    priceIconRoot: {
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
    priceValue: {
        fontSize: "0.85rem",
        fontWeight: "bold",
        color: "#ABEBC6",
        marginLeft: "-8px"
    },
})

const EventCard = ({item}) => {
    const classes = useStyles()

    const {name, src, location, contact} = item

    const renderRatings = () => (
        <div className = {classes.priceRoot}>
            <div className = {classes.priceIconRoot}>
                <AttachMoney className = {classes.icon}/>
                <span className = {classes.priceValue}>2500 onwards</span>
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

export default EventCard