import React from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import InputFile from '../../Components/InputFile/InputFile'

import './AdminPanel.css'
import file from '../../assets/Icons/file.png'

const NewMovie = ({values, handleInputOnChange, handleFileOnChange, handlFileRemoveOnClick}) => {

    const INPUTS = [
        {name: "movieName", label: "Name", placeholder: "Enter movie name"},
        {name: "movieDuration", label: "Duration", placeholder: "Enter movie duration"},
        {name: "movieGenre", label: "Genre", placeholder: "Enter movie genre"},
        {name: "movieRelease", label: "Release", placeholder: "Enter movie release date"},
        {name: "movieSynopsis", label: "Synopsis", placeholder: "Enter movie synopsis"},
        {name: "movieUrl", label: "Trailer url", placeholder: "Enter movie trailer url"},
        {name: "movieImdb", label: "Imdb", placeholder: "Enter movie imdb rate"},
        {name: "movieRotten", label: "Rotten", placeholder: "Enter movie rotten rate"},
        {name: "movieLanguage", label: "Language", placeholder: "Enter movie language"},
        {name: "movieExperience", label: "Experience", placeholder: "Enter movie experience"},
        {name: "movieShowType", label: "Show Type", placeholder: "Enter movie show type"},
    ]

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
                { INPUTS.map((item, idx) => {
                    const {name, label, placeholder} = item
                    return (
                        <Grid item xs = {12} sm = {12} md = {4} key = {idx}>
                            { renderInputField(name, label, placeholder) }
                        </Grid>
                    )
                }) }
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