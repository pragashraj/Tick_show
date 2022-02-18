import React from 'react'

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

const NewMovie = ({
    values, 
    handleInputOnChange, 
    handleFileOnChange, 
    handlFileRemoveOnClick, 
    handleMovieSubmitOnClick,
    handleMovieCancelOnClick
}) => {

    const renderMultiline = (name, label, placeholder) => {
        return (
            <div className = "input_wrapper">
                <span className = "input_wrapper-label">{label}</span>
                <MultilineInput 
                    name = {name} 
                    label = {placeholder} 
                    handleOnChange = {handleInputOnChange}
                    value = {values && values[name]}
                />
            </div>
        )
    }

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

    const renderBtnFooter = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <SecondaryButton label = "Cancel" onClick = {handleMovieCancelOnClick}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <CustomButton label = "Create" onClick = {handleMovieSubmitOnClick}/>
                </Grid>
            </Grid>
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
                <Grid item xs = {12} sm = {12} md = {12}>
                    { renderMultiline("movieSynopsis", "Synopsis", "Enter movie synopsis") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderInputField("movieUrl", "Trailer url", "Enter movie trailer url") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderInputField("movieImdb", "Imdb", "Enter movie imdb rate") }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}>
                    { renderInputField("movieRotten", "Rotten", "Enter movie rotten rate") }
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
            <div className = 'form-btn-footer'>
                { renderBtnFooter() }
            </div>
        </div>
    )
}

export default NewMovie