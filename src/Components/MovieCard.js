import React, {useState} from 'react'

import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import movieCardImage from '../assets/images/movieCard.png'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest })
}))

const MovieCard = () => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandOnClick = () => {
        setExpanded(!expanded)
    }

    const renderHeader = () => (
        <CardHeader title = "Spiderman no way home"/>
    )

    const renderMedia = () => (
        <CardMedia
            component = "img"
            height = "174"
            image = {movieCardImage}
            alt = "Paella dish"
        />
    )

    const renderContent = () => (
        <CardContent>
            <Typography variant = "body2" sx = {{color: "#ffffff"}}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>
    )

    const renderAction = () => (
        <CardActions disableSpacing>
            <ExpandMore
                expand = {expanded}
                onClick = {handleExpandOnClick}
                aria-expanded = {expanded}
                aria-label = "show more"
            >
                <ExpandMoreIcon sx = {{color: "#ffffff"}}/>
            </ExpandMore>
        </CardActions>
    )

    const renderCollapse = () => (
        <Collapse in = {expanded} timeout = "auto" unmountOnExit>
            <CardContent>
                
            </CardContent>
        </Collapse>
    )

    return (
        <Card sx = {{ maxWidth: 300, backgroundColor: "#2C3E50" }}>
            { renderHeader() }
            { renderMedia() }
            { renderContent() }
            { renderAction() }
            { renderCollapse() }
        </Card>
    )
}

export default MovieCard