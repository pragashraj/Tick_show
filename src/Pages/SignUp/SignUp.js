import React, { Component } from 'react'

//Material-UI
import { Grid, CssBaseline, Paper, Box } from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SnackBarAlert from '../../Components/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import {signUp} from '../../api/auth'

import './SignUp.css'
import signup_cover from '../../assets/CarouselImages/cover.jpg'

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false
    }

    handleSignupApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await signUp(data)
            if (response.success) {
                this.setSuccessSnack(response.message)
            }
            this.setState({ loading: false, username: "", email: "", password: "", confirmPassword: "" })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleSignupOnClick = () => {
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

    renderSignInLink = () => {
        return (
            <div className = "form_signin-link_root">
                <a href = "/signin" className = "signin_link">Already have an account ?</a>
            </div>
        )
    }

    renderformButton = () => {
        return (
            <div className = 'signup_form-btn'>
                <CustomButton label = "Sign up" onClick = {this.handleSignupOnClick}/>
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
                { this.renderformButton() }
                { this.renderSignInLink() }
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
        const {openSnackBar, severity, message, loading} = this.state
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
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default SignUp