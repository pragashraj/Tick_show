import React from 'react'

//Material-UI
import {Modal, Backdrop, DialogActions} from '@mui/material'
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
        backgroundColor: "rgba(0, 0, 0, 0.9)",
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

const UpdatePopup = ({open, values, tab, handleCancel, handleUpdate, handleInputOnChange}) => {
    const classes = useStyles()
    
    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <InputField
                    name = {name}
                    label = {placeholder}
                    handleOnChange = {handleInputOnChange}
                    value = {values[name]}
                />
            </div>
        )
    }

    const renderMovieFields = () => {
        return (
            <div>
                { renderInputField("movieName", "Name", "Enter theatre name") }
                { renderInputField("movieDuration", "Duration", "Enter theatre address") }
                { renderInputField("movieReleaseDate", "ReleaseDate", "Enter theatre contact no") }
                { renderInputField("movieExperience", "Experience", "Enter theatre rate") }
            </div>
        )
    }

    const renderTheatreFields = () => {
        return (
            <div>
                { renderInputField("theatreName", "Name", "Enter theatre name") }
                { renderInputField("theatreAddress", "Address", "Enter theatre address") }
                { renderInputField("theatreContact", "Contact", "Enter theatre contact no") }
                { renderInputField("theatreLocation", "Location", "Enter theatre location") }
            </div>
        )
    }

    const renderEventFields = () => {
        return (
            <div>
                { renderInputField("eventName", "Name", "Enter event name") }
                { renderInputField("eventAddress", "Address", "Enter event address") }
                { renderInputField("eventContact", "Contact", "Enter contact no") }
                { renderInputField("eventPrice", "Price", "Enter event price") }
                { renderInputField("eventLocation", "Location", "Enter event location") }
            </div>
        )
    }

    const renderFields = () => {
        switch(tab) {
            case "Events": return renderEventFields()
            case "Theatres": return renderTheatreFields()
            case "Movies": return renderMovieFields()
            default: return
        }
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
        const {selectedRows} = values
        const selectedRow = selectedRows.length > 0 ? selectedRows[0] : null
        return (
            <div className = {classes.paper}>
                <h2 id = "transition-modal-title">Update - {selectedRow && selectedRow.name}</h2>
                <div className = {classes.form}>{ renderFields() }</div>
                { renderBtnFooter() }
            </div>
        )
    }

    return (
        <Modal open = {open} className = {classes.modal} onClose = {handleCancel}
            BackdropComponent = {Backdrop}
            BackdropProps = {{ timeout: 500 }}
            closeAfterTransition
        >
            { renderMainContainer() }
        </Modal>
    )
}

export default UpdatePopup