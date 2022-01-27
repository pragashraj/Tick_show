import React from 'react'

//Material-UI
import {Snackbar} from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation = {6} ref = {ref} variant = "filled" {...props} />
})

const SnackBarAlert = ({open, severity, message, handleClose}) => {
    return (
        <Snackbar 
            open = {open}
            autoHideDuration = {3000}
            onClose = {handleClose}
            anchorOrigin = {{vertical: 'bottom', horizontal: 'right'}}
        >
            <Alert onClose = {handleClose} severity = {severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBarAlert