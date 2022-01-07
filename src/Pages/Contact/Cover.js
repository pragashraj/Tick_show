import React from 'react'

//Material-UI
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import contactImg from '../../assets/CarouselImages/contact_cover.jpg'

const useStyles = makeStyles({
    cover: {
        backgroundImage: `url(${contactImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
})

const Cover = () => {
    const classes = useStyles()

    return (
        <Grid item xs = {false} sm = {4} md = {7} className = {classes.cover}/>
    )
}

export default Cover