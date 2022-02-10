import React, { Component } from 'react'

//Material-UI
import { Grid, CssBaseline, Paper, Box } from '@mui/material'

import Cover from './Cover'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import InputField from '../../Components/InputField'
import Loading from '../../Components/Loading/Loading'
import SnackBarAlert from '../../Components/SnackBarAlert'

import {sendMessage} from '../../api/contact'

import './Contact.css'

class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        loading: false,
        snackMessage: "",
        severity: "",
        openSnackBar: false,
    }

    sendMessageApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await sendMessage(data)
            if (response) {
                this.setSuccessSnackBar(response.message)
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleSubmitOnClick = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, snackMessage, openSnackBar) => {
        this.setState({ severity, snackMessage, openSnackBar })
    }

    renderSnackBar = () => {
        const {openSnackBar, severity, snackMessage} = this.state
        return (
            <SnackBarAlert 
                open = {openSnackBar} 
                severity = {severity} 
                message = {snackMessage} 
                handleClose = {this.handleSnackBarClose}
            />
        )
    }

    renderInputField = (name, label, placeholder) => {
        return (
            <div className = "contact_form-input_wrapper">
                <span className = "contact_form-input_wrapper-label-input">{label}</span>
                <InputField 
                    name = {name} 
                    label = {placeholder} 
                    handleOnChange = {this.handleInputOnChange}
                    value = {this.state[name]}
                />
            </div>
        )
    }

    renderForm = () => {
        return (
            <div className = 'contact_form'>
                <span className = "contact_form-title">Say Hello !</span>
                { this.renderInputField("name", "Your Name", "Enter your name") }
                { this.renderInputField("email", "Email", "Enter your email address") }
                { this.renderInputField("subject", "Subject", "Enter subject") }
                { this.renderInputField("message", "Message", "Enter message") }
                <CustomButton label = "Submit" onClick = {this.handleSubmitOnClick}/>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Cover/>
                <Grid item xs = {12} sm = {8} md = {5} component = {Paper} elevation = {6} square sx = {{background: "transparent"}}>
                    <Box sx = {{my: 3, mx: 4, display: 'flex', flexDirection: 'column'}}>
                        { this.renderForm() }
                    </Box>
                </Grid>
            </Grid>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'contacts_root'>
                <div className = 'contacts_parallax'>
                    <div className = 'contacts_container'>
                        { this.renderMainContainer() }
                    </div>
                </div>
                { this.renderSnackBar() }
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default Contact