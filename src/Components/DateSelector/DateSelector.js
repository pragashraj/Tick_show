import React from 'react'

import PropTypes from "prop-types"
import DatePicker from "react-datepicker"

//Material-UI
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import "react-datepicker/dist/react-datepicker.css"
import './DateSelector.css'

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

const DateSelector = ({label, value, icon, onChange}) => {
    const classes = useStyles()

    const IconImage = icon

    const renderDatePicker = () => (
        <div className = {classes.labelRoot}>
            <DatePicker
                selected = {value}
                onChange = {onChange}
                selectsStart
                startDate = {new Date()}
                placeholderText = 'Start date'
                dateFormat = 'dd/MM/yyyy'
                className = "date_picker__input"
            />
        </div>
    )

    return (
        <div className = {classes.root}>
            <div className = {classes.labelRoot}>
                <IconImage className = {classes.icon}/>
                <Typography className = {classes.label}>{label}</Typography>
            </div>
            { renderDatePicker() }
        </div>
    )
}

DateSelector.propTypes = {
    IconImage: PropTypes.element
}

export default DateSelector