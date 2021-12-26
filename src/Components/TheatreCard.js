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

const useStyles = makeStyles({
    title: {
        fontSize: "1.2rem", 
        letterSpacing: "0.05rem", 
        fontWeight: "bold", 
        textTransform: "uppercase"
    },
    subtitle: {
        fontSize: "0.7rem", 
        letterSpacing: "0.08rem"
    },
    cardContent: {
        flex: '1 0 auto'
    },
    cardMedia: {
        height: 200
    },
    timeSlots: {
        display: 'flex',
        padding: "3vh"
    }
})

const TheatreCard = ({title, otherInfo, imageSrc, timeVariants}) => {
    const classes = useStyles()

    const renderContent = () => (
        <CardContent className = {classes.cardContent}>
            <Typography component = "div" variant = "h4" className = {classes.title}> 
                {title}
            </Typography>
            <Typography variant = "subtitle1" color = "text.secondary" component = "div" className = {classes.subtitle}>
                Address: {otherInfo.add}
            </Typography>
            <Typography variant = "subtitle1" color = "text.secondary" component = "div" className = {classes.subtitle}>
                Mobile: {otherInfo.no}
            </Typography>
        </CardContent>
    )

    const renderMedia = () => (
        <CardMedia
            component = "img"
            image = {imageSrc}
            alt = {title}
            className = {classes.cardMedia}
        />
    )

    const renderTimeSlots = () => (
        <Box className = {classes.timeSlots}>
            <ButtonGroup variant = "text" aria-label = "outlined button group">
                { timeVariants.map(i => <Button>{i}</Button>) }
            </ButtonGroup>
        </Box>
    )

    return (
        <Paper elevation = {5}>
            <Grid container>
                <Grid item xs = {12} sm = {6} md = {4}>
                    { renderMedia() }
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
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
