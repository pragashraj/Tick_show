import React from 'react'

//Material-UI
import { Grid, Divider, Button, ButtonGroup } from '@mui/material'
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
        alignItems: "center"
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
    },
    timeSlotsRoot: {
        width: "100%", 
        display: "flex"
    },
    timeSlot: {
        color: "#ffffff", 
        border: "1px solid #fff", 
        width: "100%", 
        display: "flex"
    },
    timeSlotSelected: {
        color: "#ffffff", 
        border: "1px solid #fff", 
        width: "100%", 
        display: "flex",
        backgroundColor: "#ff6347"
    },
    divider: {
        background: "#fff", 
        width: "1.5px", 
        height: "30px"
    }
})

const TheatreSelection = ({theatre, slotOnClick, selectedTheatre, selectedTimeSlot}) => {
    const classes = useStyles()

    const {name, timeSlots} = theatre

    const getSlotStyle = (slot) => {
        if (selectedTheatre === name && selectedTimeSlot === slot)
            return classes.timeSlotSelected
        return classes.timeSlot
    }

    const renderTimeSlots = () => (
        <ButtonGroup variant = "outlined" size = "small" className = {classes.timeSlotsRoot}>
            { timeSlots.map((item, idx) => {
                return (
                    <Button key = {idx} className = {getSlotStyle(item)} onClick = {() => slotOnClick(name, item)}>
                        {item}
                    </Button>
                )
            }) }
        </ButtonGroup>
    )

    return (
        <div className = {classes.root}>
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {3} md = {3}>
                    <div className = {classes.locationRoot}>
                        <div className = {classes.locationValueRoot}>
                            <LocationOn className = {classes.locationIcon}/>
                            <span className = {classes.locationValue}>{name}</span>
                        </div>
                        <Divider orientation = "vertical" flexItem className = {classes.divider}/> 
                    </div>
                </Grid>
                <Grid item xs = {12} sm = {3} md = {9}>
                    { renderTimeSlots() }
                </Grid> 
            </Grid>
        </div>
    )
}

export default TheatreSelection