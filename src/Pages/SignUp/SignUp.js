import React, { Component } from 'react'

//Material-UI
import { Grid, CssBaseline, Paper, Box } from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SnackBarAlert from '../../Components/SnackBarAlert'

import './SignUp.css'
import signup_cover from '../../assets/CarouselImages/cover.jpg'

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: null,
        severity: "",
        openSnackBar: false
    }

    handleSignupApi = async(data) => {

    }

    handleSubmitOnClick = () => {
        const {username, email, password, confirmPassword} = this.state
        if (username && email && password && confirmPassword) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else if (password === confirmPassword) {
                this.setErrorSnackBar('Passwords not matched')
            }
            else {
                const data = {username, email, password}
                this.handleSignupApi(data)
                this.setState({ message: null })
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty' )
        }
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

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signup_form-input_wrapper">
                <span className = "signup_form-input_wrapper-label-input">{label}</span>
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
            <div className = 'signup_form'>
                <span className = "signup_form-title">Register !</span>
                { this.renderInputField("username", "Username", "Enter your name") }
                { this.renderInputField("email", "Email", "Enter your email address") }
                { this.renderInputField("password", "Password", "Enter password") }
                { this.renderInputField("confirmPassword", "Confirm Password", "Confirm your pasword") }
                <CustomButton label = "Submit" onClick = {this.handleSubmitOnClick}/>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Grid item xs = {false} sm = {4} md = {7} component = {Paper} elevation = {6}
                    sx = {{
                        backgroundImage: `url(${signup_cover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <Grid item xs = {12} sm = {8} md = {5} component = {Paper} elevation = {6} sx = {{background: "transparent"}}>
                    <Box sx = {{my: 3, mx: 4, display: 'flex', flexDirection: 'column'}}>
                        { this.renderForm() }
                    </Box>
                </Grid>
            </Grid>
        )
    }

    render() {
        const {openSnackBar, severity, message} = this.state
        return (
            <div className = 'signup_root'>
                <div className = 'signup_parallax'>
                    <div className = 'signup_container'>
                        { this.renderMainContainer() }
                    </div>
                </div>
                <SnackBarAlert 
                    open = {openSnackBar} 
                    severity = {severity} 
                    message = {message} 
                    handleClose = {this.handleSnackBarClose}
                />
            </div>
        )
    }
}

export default SignUp