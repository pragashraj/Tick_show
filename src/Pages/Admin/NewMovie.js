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

class NewMovie extends Component {
    state = {
        file: null,
        fileOnLoad: null,
        name: "",
        duration: "",
        genre: "Action",
        release: "",
        synopsis: "",
        url: "",
        imdb: "",
        rotten: "",
        language: "English",
        experience: "2D",
        showType: "Now Showing",
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
                    { this.renderInputField("name", "Name", "Enter movie name") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("duration", "Duration", "Enter movie duration") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("release", "Release", "Enter movie release date") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderDropDown("genre", "Genre", options["genreOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderDropDown("language", "Language", options["languageOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderDropDown("experience", "Experience", options["experienceOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { this.renderDropDown("showType", "Show Type", options["showTypeOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { this.renderMultiline("synopsis", "Synopsis", "Enter movie synopsis") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("url", "Trailer url", "Enter movie trailer url") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("imdb", "Imdb", "Enter movie imdb rate") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { this.renderInputField("rotten", "Rotten", "Enter movie rotten rate") }
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
                    description = "Select a suitable cover image for the movie"                          
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

export default NewMovie