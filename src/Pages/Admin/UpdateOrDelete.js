import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomTable from '../../Components/Table/CustomTable'

class UpdateOrDelete extends Component {
    state = {
        searchValue: ""
    }

    tableHeaders = ["Dessert", "Calories", "Fat", "carbs", "protein"]
    tableData = [
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]}
    ]

    handleSearchOnClick = () => {
        
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    renderInputField = (name, label, placeholder) => {
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

    renderTableContent = () => {
        return <CustomTable
            tableHeaders = {this.tableHeaders}
            tableData = {this.tableData}
        />
    }

    renderSearch = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {6} sm = {6} md = {9}>
                    { this.renderInputField("searchValue", "Movie name", "Enter movie name") }
                </Grid>
                <Grid item xs = {6} sm = {6} md = {3}>
                    <CustomButton label = "Search" onClick = {this.handleSearchOnClick}/>
                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <div className = 'new-movie-root'>
                { this.renderSearch() }
                { this.renderTableContent() }
            </div>
        )
    }
}

export default UpdateOrDelete