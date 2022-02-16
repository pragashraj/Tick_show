import React from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import InputFile from '../../Components/InputFile/InputFile'
import DropDown from '../../Components/DropDown'

import './AdminPanel.css'
import file from '../../assets/Icons/file.png'

const NewMovie = ({values, handleInputOnChange, handleFileOnChange, handlFileRemoveOnClick}) => {

    const INPUTS = [
        {name: "movieSynopsis", label: "Synopsis", placeholder: "Enter movie synopsis"},
        {name: "movieUrl", label: "Trailer url", placeholder: "Enter movie trailer url"},
        {name: "movieImdb", label: "Imdb", placeholder: "Enter movie imdb rate"},
        {name: "movieRotten", label: "Rotten", placeholder: "Enter movie rotten rate"},
    ]

    const renderDropDown = (name, label, options) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <DropDown 
                    name = {name} 
                    options = {options}
                    handleOnChange = {handleInputOnChange}
                    value = {values && values[name]}
                />
            </div>
        )
    }

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <InputField 
                    name = {name} 
                    label = {placeholder} 
                    handleOnChange = {handleInputOnChange}
                    value = {values && values[name]}
                />
            </div>
        )
    }

    const renderInputRoot = () => {
        return (
            <Grid container>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderInputField("movieName", "Name", "Enter movie name") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderInputField("movieDuration", "Duration", "Enter movie duration") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderInputField("movieRelease", "Release", "Enter movie release date") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { renderDropDown("movieGenre", "Genre", values["genreOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { renderDropDown("movieLanguage", "Language", values["languageOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { renderDropDown("movieExperience", "Experience", values["experienceOptions"]) }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    { renderDropDown("movieShowType", "Show Type", values["showTypeOptions"]) }
                </Grid>
            </Grid>
        )
    }

    const renderInputFile = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <InputFile 
                    handleFileOnChange = {handleFileOnChange} 
                    fileImage = {file}
                    fileRemoveOnClick = {handlFileRemoveOnClick}
                    description = "Select a suitable cover image for the movie"                           
                />
            </Grid>
        )
    }

    return (
        <div className = 'new-movie-root'>
            <Grid container>
                { renderInputFile() }
            </Grid>
            <div className = 'input_root'>
                { renderInputRoot() }
            </div>
        </div>
    )
}

export default NewMovie