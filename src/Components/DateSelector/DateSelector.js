import React from 'react'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import './DateSelector.css'

const DateSelector = ({selectedDate, onChange}) => {
    return <DatePicker
        selected = {selectedDate}
        onChange = {onChange}
        selectsStart
        startDate = {new Date()}
        placeholderText = 'Start date'
        dateFormat = 'dd/MM/yyyy'
        className = "date_picker__input"
    />
}

export default DateSelector