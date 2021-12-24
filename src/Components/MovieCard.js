import React from 'react'

//Material-UI
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const MovieCard = ({title, otherInfo, imageSrc, handleBuyOnClick}) => {

    const renderContent = () => (
        <CardContent sx = {{ flex: '1 0 auto' }}>
            <Typography 
                component = "div" 
                variant = "h6" 
                sx = {{fontSize: "0.9rem", letterSpacing: "0.05rem", fontWeight: "bold", textTransform: "uppercase"}}
            > 
            {title}
            </Typography>
            <Typography 
                variant = "subtitle1" 
                color = "text.secondary" 
                component = "div" 
                sx = {{fontSize: "0.7rem", letterSpacing: "0.08rem"}}
            >
            {otherInfo}
            </Typography>
        </CardContent>
    )

    const renderMedia = () => (
        <CardMedia
            component = "img"
            sx = {{ width: 150 }}
            image = {imageSrc}
            alt = {title}
        />
    )

    const renderButtonBlock = () => (
        <Box sx = {{ display: 'flex', alignItems: 'center', justifyContent: "center", pl: 1, pb: 2 }}>
            <Button variant = "outlined" onClick = {handleBuyOnClick}>Buy Tickets</Button>
        </Box>
    )

    return (
        <Paper elevation = {5} sx = {{ width: 350, marginRight: "5px", marginBottom: "20px", height: 180 }}>
            <Card sx = {{ display: 'flex', height: 180 }}>
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