import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomTable from '../../Components/Table/CustomTable'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'

import './AdminPanel.css'

class UpdateOrDelete extends Component {
    state = {
        searchValue: ""
    }

    tableHeaders = ["Dessert", "Calories", "Fat", "carbs", "protein"]
    tableData = [ 
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]},
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]},
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]},
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]},
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]},
    ]

    handleEditOnClick = () => {

    }

    handleUpdateOnClick = () => {

    }

    handleDeleteOnClick = () => {

    }

    handleSearchOnClick = () => {
        
    }

    handleCancelOnClick = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    renderInputField = (name, placeholder) => {
        return (
            <div className = "input_wrapper">
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
                <Grid item xs = {12} sm = {12} md = {3}>
                    <SecondaryButton label = "Cancel" onClick = {this.handleCancelOnClick}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {3}>
                    <CustomButton label = "Edit" onClick = {this.handleEditOnClick}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {3}>
                    <CustomButton label = "Update" onClick = {this.handleUpdateOnClick}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {3}>
                    <CustomButton label = "Delete" onClick = {this.handleDeleteOnClick}/>
                </Grid>
            </Grid>
        )
    }

    renderTableContent = () => {
        return (
            <div className = 'table_root'>
                <CustomTable
                    tableHeaders = {this.tableHeaders}
                    tableData = {this.tableData}
                />
            </div>
        )
    }

    renderSearch = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {6} sm = {6} md = {9}>
                    { this.renderInputField("searchValue", "Enter movie name") }
                </Grid>
                <Grid item xs = {6} sm = {6} md = {3}>
                    <SecondaryButton label = "Search" onClick = {this.handleSearchOnClick}/>
                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <div className = 'new-movie-root'>
                { this.renderSearch() }
                { this.renderTableContent() }
                { this.renderBtnFooter() }
            </div>
        )
    }
}

export default UpdateOrDelete