import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import InputFile from '../../Components/InputFile/InputFile'
import DropDown from '../../Components/DropDown'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'

import './AdminPanel.css'
import file from '../../assets/Icons/file.png'

class NewEvent extends Component {
    state = {
        name: "",
        address: "",
        contact: "",
        location: "",
        price: "",
        category: "",
        showType: "",
        file: null,
        fileOnLoad: null,
    }

    handleSubmitOnClick = () => {
        const {file, name, address, contact, location, price, category, showType} = this.state

        if (file && name && address && contact && location && price && category) 
        {
            const data = {
                name, address, contact, location, price, category, showType
            }

            const success = this.props.createNewEventApi(data, file)

            if (success) {
                this.handleCancelOnClick()
            }
        }
        else {
            this.props.setErrorSnackBar("Fields cannot be empty")
        }
    }

    handleCancelOnClick = () => {
        this.setState({
            name: "",
            address: "",
            contact: "",
            location: "",
            price: "",
            category: "",
            showType: "",
            file: null,
            fileOnLoad: null
        })
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

    renderDropDown = (name, label, options) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <DropDown
                    name = {name}
                    options = {options}
                    handleOnChange = {this.handleInputOnChange}
                    value = {this.state[name]}
                />
            </div>
        )
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
        const options = this.props.options
        return (
            <Grid container>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("name", "Name", "Enter event name") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("address", "Address", "Enter event address") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("contact", "Contact", "Enter event contact no") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderInputField("location", "Location", "Enter event location") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderInputField("price", "Price", "Enter event ticket price") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderDropDown("category", "Category", options["eventCategoryOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderDropDown("showType", "Show Type", options["eventShowTypeOptions"]) }
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
                    description = "Select a suitable cover image for the event"                         
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

export default NewEvent