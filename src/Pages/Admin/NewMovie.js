import React from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import InputFile from '../../Components/InputFile/InputFile'

import './AdminPanel.css'
import file from '../../assets/Icons/file.png'

const NewMovie = ({values, handleInputOnChange, handleFileOnChange, handlFileRemoveOnClick}) => {

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

    const renderInputFile = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <InputFile 
                    handleFileOnChange = {handleFileOnChange} 
                    fileImage = {file}
                    fileRemoveOnClick = {handlFileRemoveOnClick}                            
                />
            </Grid>
        )
    }

    return (
        <div className = 'new-movie-root'>
            { renderInputFile() }
            { renderInputField("movieName", "Name", "Enter movie name") }
        </div>
    )
}

export default NewMovie