import React from 'react'

//Material-UI
import {Modal, Backdrop, Fade, DialogActions} from '@mui/material'
import { makeStyles } from '@mui/styles'

import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'
import InputField from '../../Components/InputField'

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
        color: "white",
        minWidth: "50%"
    },
    form: {
        padding: "15px",
    }
})

const UpdatePopup = ({open, values, handleCancel, handleUpdate, handleInputOnChange}) => {
    const classes = useStyles()

    
    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <InputField
                    name = {name}
                    label = {placeholder}
                    handleOnChange = {handleInputOnChange}
                    value = {""}
                />
            </div>
        )
    }

    const renderBtnFooter = () => {
        return (
            <DialogActions className = {classes.footer}>
                <SecondaryButton label = "Cancel" onClick = {handleCancel}/>
                <CustomButton label = "Confirm & Update" onClick = {handleUpdate}/>
            </DialogActions>
        )
    }

    const renderMainContainer = () => {
        return (
            <div className = {classes.paper}>
                <h2 id = "transition-modal-title">Update!</h2>
                <div className = {classes.form}>
                    { ["1", "2", "3", "4"].map((i, idx) => {
                        return <div key = {idx}> {renderInputField("", `label-${i}`, `placeholder-${i}`)}</div>
                    }) }
                </div>
                { renderBtnFooter() }
            </div>
        )
    }

    return (
        <Modal
            className = {classes.modal}
            open = {open}
            onClose = {handleCancel}
            closeAfterTransition
            BackdropComponent = {Backdrop}
            BackdropProps = {{ timeout: 500 }}
        >
            <Fade in = {open}>
                { renderMainContainer() }
            </Fade>
        </Modal>
    )
}

export default UpdatePopup