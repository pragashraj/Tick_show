import React from 'react'

//Material-UI
import { Button, DialogTitle, DialogContent, DialogActions, Dialog, Radio, RadioGroup, FormControlLabel } from '@mui/material'

const ConfirmationDialog = ({open, title, options, value, handleChange, handleOkOnClick, cancelOnClick}) => {
    const radioGroupRef = React.useRef(null)

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus()
        }
    }

    const handleCancelOnClick = () => {
        cancelOnClick(title.toLowerCase())
    }

    const renderFormControl = (option) => (
        <FormControlLabel
            value = {option}
            key = {option}
            control = {<Radio />}
            label = {option}
        />
    )

    const renderDialogContent = () => (
        <DialogContent dividers>
            <RadioGroup
                ref = {radioGroupRef}
                aria-label = {title}
                name = {title}
                value = {value}
                onChange = {handleChange}
            >
                { options.map((option) => renderFormControl(option)) }
            </RadioGroup>
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
            TransitionProps = {{ onEntering: handleEntering }}
        >
            <DialogTitle>{`Select ${title}`}</DialogTitle>
            { renderDialogContent() }
            { renderDialogActions() }
        </Dialog>
    )
}

export default ConfirmationDialog