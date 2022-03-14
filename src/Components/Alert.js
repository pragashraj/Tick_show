import React from 'react'

//Material-UI
import {Modal, Backdrop, Fade, DialogActions} from '@mui/material'
import { makeStyles } from '@mui/styles'

import CustomButton from './CustomCssButton/CustomButton'
import SecondaryButton from './CustomCssButton/SecondaryButton'

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        border: '2px solid #000',
        boxShadow: 5,
        padding: "15px",
        color: "white"
    },
})

const Alert = ({open, handleClose, handleDelete}) => {
    const classes = useStyles()
    
    return (
        <Modal
            aria-labelledby = "transition-modal-title"
            aria-describedby = "transition-modal-description"
            className = {classes.modal}
            open = {open}
            onClose = {handleClose}
            closeAfterTransition
            BackdropComponent = {Backdrop}
            BackdropProps = {{ timeout: 500 }}
        >
            <Fade in = {open}>
                <div className = {classes.paper}>
                    <h2 id = "transition-modal-title">Are you sure about deleting ?</h2>
                    <DialogActions className = {classes.footer}>
                        <SecondaryButton label = "No" onClick = {handleClose}/>
                        <CustomButton label = "Yes" onClick = {handleDelete}/>
                    </DialogActions>
                </div>
            </Fade>
        </Modal>
    )
}

export default Alert