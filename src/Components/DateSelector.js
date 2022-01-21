import React from 'react'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Material-UI
import {
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog
} from '@mui/material'

const DateSelector = ({open, selectedDate, onChange, handleOkOnClick, handleCancelOnClick}) => {

    const renderDialogContent = () => (
        <DialogContent dividers>
            <DatePicker
                selected = {selectedDate}
                onChange = {onChange}
                selectsStart
                startDate = {new Date()}
                placeholderText = 'Start date'
                isClearable
                dateFormat = 'dd/MM/yyyy'
            />
        </DialogContent>
    )

    const renderDialogActions = () => (
        <DialogActions>
            <Button autoFocus onClick = {handleCancelOnClick}>
                Cancel
            </Button>
            <Button onClick = {handleOkOnClick}>Ok</Button>
        </DialogActions>
    )

    return (
        <Dialog
            sx = {{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth = "xs"
            open = {open}
        >
            <DialogTitle>Select a Date</DialogTitle>
            { renderDialogContent() }
            { renderDialogActions() }
        </Dialog>
    )
}

export default DateSelector