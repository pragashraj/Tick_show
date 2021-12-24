import React from 'react'

import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import movieCardImage from '../assets/images/card.jpg'

const MovieCard = () => {

    const renderContent = () => (
        <CardContent sx = {{ flex: '1 0 auto' }}>
            <Typography component = "div" variant = "h6" sx = {{fontSize: "1rem"}}>Spiderman No Way home</Typography>
            <Typography variant = "subtitle1" color = "text.secondary" component = "div" sx = {{fontSize: "0.8rem"}}>English</Typography>
        </CardContent>
    )

    const renderMedia = () => (
        <CardMedia
            component = "img"
            sx = {{ width: 150 }}
            image = {movieCardImage}
            alt = "Paella dish"
        />
    )

    const renderButtonBlock = () => (
        <Box sx = {{ display: 'flex', alignItems: 'center', justifyContent: "center", pl: 1, pb: 2 }}>
            <Button variant = "outlined">Buy Tickets</Button>
        </Box>
    )

    return (
        <Paper elevation = {5} sx = {{ width: 350, marginRight: "5px", marginBottom: "20px" }}>
            <Card sx = {{ display: 'flex' }}>
                <Box sx = {{ display: 'flex', flexDirection: 'column' }}>
                    {renderContent()}
                    { renderButtonBlock()}
                </Box>
                {renderMedia()}
            </Card>
        </Paper>
    )
}

export default MovieCard