import React from 'react'

import PropTypes from "prop-types"

//Material-UI
import { Typography, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import DateSelector from '../../Components/DateSelector/DateSelector'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        padding: "8px",
        backgroundColor: "#f4f5fa", 
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
        minWidth: "200px"
    },
    labelRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: "25px",
        height: "25px" ,
        color: "#4a4f59",
        marginRight: "5px"  
    },
    valueRoot: {
        marginLeft: "15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    value: {
        color: "grey",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontSize: "0.7rem"
    },
    label: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        fontSize: "0.8rem"
    }
})

const SelectorDropDown = ({label, value, icon, selectOnClick}) => {
    const classes = useStyles()

    const IconImage = icon

    const renderDateSelector = () => (
        <div className = {classes.valueRoot}>
            <DateSelector
                selectedDate = {value}
            />
        </div>
    )

    const renderValue = () => (
        <div className = {classes.valueRoot}>
            <Typography className = {classes.value}>{value}</Typography>
            <IconButton  edge = "end" onClick = {() => selectOnClick(label)}>
                <KeyboardArrowDownIcon/>
            </IconButton>
        </div>
    )

    return (
        <div className = {classes.root}>
            <div className = {classes.labelRoot}>
                <IconImage className = {classes.icon}/>
                <Typography className = {classes.label}>{label}</Typography>
            </div>
            { label === "date" ? renderDateSelector() : renderValue() }
        </div>
    )
}

SelectorDropDown.propTypes = {
    IconImage: PropTypes.element
}

export default SelectorDropDown