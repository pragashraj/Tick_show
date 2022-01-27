import React, { Component } from 'react'

//Material-UI
import { Grid, CssBaseline, Paper, Box } from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'

import './SignUp.css'
import signup_cover from '../../assets/CarouselImages/cover.jpg'

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleSubmitOnClick = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
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
                <Grid item xs = {false} sm = {4} md = {7} component = {Paper}
                    sx = {{
                        backgroundImage: `url(${signup_cover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
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
            <div className = 'signup_root'>
                <div className = 'signup_parallax'>
                    <div className = 'signup_container'>
                        { this.renderMainContainer() }
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp