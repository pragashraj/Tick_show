import React, { Component } from 'react'

//Material-UI
import { Grid, CssBaseline, Paper, Box } from '@mui/material'

import Cover from './Cover'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import InputField from '../../Components/InputField'

import './Contact.css'

class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    handleSubmitOnClick = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    renderInputField = (name, label, placeholder) => {
        return (
            <div className = "contact_form-input_wrapper">
                <span className = "contact_form-input_wrapper-label-input">{label}</span>
                <InputField name = {name} label = {placeholder} handleOnChange = {this.handleInputOnChange}/>
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
        return (
            <div className = 'contacts_root'>
                <div className = 'contacts_parallax'>
                    <div className = 'contacts_container'>
                        { this.renderMainContainer() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact