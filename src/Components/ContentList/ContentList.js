import React, {useState, useEffect} from 'react'

import MovieCard from '../MovieCard'

//Material-UI
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import './ContentList.css'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest })
}))

const ContentList = ({title, listItems, expanded, handleExpandOnClick}) => {
    const [initialList, setInitialList] = useState([])
    const [expandedList, setExpandedList] = useState([])

    useEffect(() => {
        let len = listItems.length
        if (len > 4) {
            setInitialList(listItems.slice(0, 4))
            setExpandedList(listItems.slice(4, len))
        } 
        else {
            setInitialList(listItems)
        }
    }, [listItems])

    const renderList = (idx) => (
        <Grid item xs = {12} sm = {6} md = {3} key = {idx}>
            <MovieCard/>
        </Grid>
    )

    const renderTop = () => (
        <CardActions disableSpacing>
            <h2>{title}</h2>
            <ExpandMore
                expand = {expanded}
                onClick = {() => handleExpandOnClick(title)}
                aria-expanded = {expanded}
                aria-label = "show more"
            >
                <ExpandMoreIcon sx = {{color: "#ffffff"}}/>
            </ExpandMore>
        </CardActions> 
    )

    const renderContentList = () => (
        <div className = 'list_items'>
            <Grid container spacing = {2}>
                { initialList.map((i, idx) => renderList(idx) ) }
            </Grid>
            <Collapse in = {expanded} timeout = "auto" unmountOnExit>
                <Grid container spacing = {2}>
                    { expandedList.map((i, idx) => renderList(idx) ) }
                </Grid>
            </Collapse>
        </div>
    )

    return (
        <div className = 'block_list_root'>
            <div className = 'block_list_container'>
                { renderTop() }
                { renderContentList() }
            </div>
        </div>
    )
}

export default ContentList