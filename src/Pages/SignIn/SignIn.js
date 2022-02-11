import React, { Component } from 'react'

import {connect} from 'react-redux'

//Material-UI
import { Grid, CssBaseline, Paper, Box } from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SnackBarAlert from '../../Components/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import {signIn} from '../../api/auth'
import { storeLoginResponse } from '../../redux/actions/authAction'

import './SignIn.css'
import signin_cover from '../../assets/images/cover.jpg'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false
    }

    handleSigninApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await signIn(data)
            const {email, name, token, expiration} = response
            const loginResponse = { email, name, token, expiration }
            this.props.storeLoginResponse(loginResponse)
            this.setState({ loading: false, email: "", password: "", message: null })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleLoginOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                const data = {email, password}
                this.handleSigninApi(data)
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
            <div className = "signin_form-input_wrapper">
                <span className = "signin_form-input_wrapper-label-input">{label}</span>
                <InputField 
                    name = {name} 
                    label = {placeholder} 
                    handleOnChange = {this.handleInputOnChange}
                    value = {this.state[name]}
                />
            </div>
        )
    }

    renderSignUpLink = () => {
        return (
            <div className = "form_signup-link_root">
                <a href = "/signup" className = "signup_link">Don't have any account ?</a>
            </div>
        )
    }

    renderForgotPassword = () => {
        return (
            <div className = "form_forgot_password_root">
                <a href = "/forgotPassword" className = "form_forgot_password">Forgot password ?</a>
            </div>
        )
    }

    renderFormButton = () => {
        return (
            <div className = 'signin_form-btn'>
                <CustomButton label = "Login" onClick = {this.handleLoginOnClick}/>
            </div>
        )
    }

    renderForm = () => {
        return (
            <div className = 'signin_form'>
                <span className = "signin_form-title">Login !</span>
                { this.renderInputField("email", "Email", "Enter your email address") }
                { this.renderInputField("password", "Password", "Enter your password") }
                { this.renderForgotPassword() }
                { this.renderFormButton() }
                { this.renderSignUpLink() }
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Grid item xs = {false} sm = {4} md = {7} component = {Paper} elevation = {6}
                    sx = {{
                        backgroundImage: `url(${signin_cover})`,
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
            <div className = 'signin_root'>
                <div className = 'signin_parallax'>
                    <div className = 'signin_container'>
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

const mapDispatchToProps = dispatch => {
    return {
        storeLoginResponse: data => { dispatch(storeLoginResponse(data)) }
    }
}

export default connect(null, mapDispatchToProps)(SignIn)