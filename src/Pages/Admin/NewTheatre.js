import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import InputFile from '../../Components/InputFile/InputFile'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'

import './AdminPanel.css'
import file from '../../assets/Icons/file.png'

class NewTheatre extends Component {
    state = {
        file: null,
        fileOnLoad: null,
        name: "",
        address: "",
        contact: "",
        location: "",
    }

    handleSubmitOnClick = () => {

    }

    handleCancelOnClick = () => {
        
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleFileOnChange = (file) => {
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({ fileOnLoad : reader.result })
        }
        reader.readAsDataURL(file)
        this.setState({ file: file })
    }

    handlFileRemoveOnClick = () => {
        this.setState({ fileOnLoad : null, file: null })
    }

    renderInputField = (name, label, placeholder) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <InputField
                    name = {name}
                    label = {placeholder}
                    handleOnChange = {this.handleInputOnChange}
                    value = {this.state[name]}
                />
            </div>
        )
    }

    renderBtnFooter = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <SecondaryButton label = "Cancel" onClick = {this.handleCancelOnClick}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <CustomButton label = "Create" onClick = {this.handleSubmitOnClick}/>
                </Grid>
            </Grid>
        )
    }

    renderInputRoot = () => {
        return (
            <Grid container>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderInputField("name", "Name", "Enter theatre name") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderInputField("address", "Address", "Enter theatre address") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderInputField("contact", "Contact", "Enter theatre contact no") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderInputField("location", "Location", "Enter theatre location") }
                </Grid>
            </Grid>
        )
    }

    renderInputFile = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <InputFile
                    handleFileOnChange = {this.handleFileOnChange}
                    fileImage = {file}
                    fileRemoveOnClick = {this.handlFileRemoveOnClick}
                    description = "Select a suitable cover image for the theatre"                          
                />
            </Grid>
        )
    }

    render() {
        return (
            <div className = 'new-movie-root'>
                <Grid container>
                    { this.renderInputFile() }
                </Grid>
                <div className = 'input_root'>
                    { this.renderInputRoot() }
                </div>
                <div className = 'form-btn-footer'>
                    { this.renderBtnFooter() }
                </div>
            </div>
        )
    }
}

export default NewTheatre