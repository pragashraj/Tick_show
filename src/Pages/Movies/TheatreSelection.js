import React from 'react'

//Material-UI
import { Grid, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { LocationOn } from '@mui/icons-material'

const useStyles = makeStyles({
    root: {
        display: "flex",
        padding: "15px",
        border: "1px solid rgb(159, 161, 163)",
        borderRadius: "5px",
        background: "transparent",
    },
    locationRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    locationValueRoot: {
        display: "flex",
        flexDirection: "row",
    },
    locationValue: {
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "0.07rem",
        fontSize: "0.9rem"
    },
    locationIcon: {
        color: "#fff",
        marginRight: "10px"
    }
})

const TheatreSelection = () => {
    const classes = useStyles()

    return (
        <div className = {classes.root}>
            <Grid container>
                <Grid item xs = {12} sm = {3} md = {3}>
                    <div className = {classes.locationRoot}>
                        <div className = {classes.locationValueRoot}>
                            <LocationOn className = {classes.locationIcon}/>
                            <span className = {classes.locationValue}>Ja-ela Cinemax</span>
                        </div>
                        <Divider orientation = "vertical" flexItem sx = {{background: "#fff", width: "1.5px"}}/> 
                    </div>
                </Grid>
                <Grid item xs = {12} sm = {3} md = {9}></Grid> 
            </Grid>
        </div>
    )
}

export default TheatreSelection