import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import InputFile from '../../Components/InputFile/InputFile'
import DropDown from '../../Components/DropDown'
import MultilineInput from '../../Components/MultilineInput'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'

import './AdminPanel.css'
import file from '../../assets/Icons/file.png'

class NewEvent extends Component {
    state = {
        name: "",
        address: "",
        contact: "",
        price: "",
        category: "",
        showType: "",
        file: null,
        fileOnLoad: null,
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

    renderMultiline = (name, label, placeholder) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <MultilineInput
                    name = {name}
                    label = {placeholder}
                    handleOnChange = {this.handleInputOnChange}
                    value = {this.state[name]}
                />
            </div>
        )
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