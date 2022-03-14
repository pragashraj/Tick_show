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
        searchValue: "",
        selectedIndexes: [],
        selectedRows: [],
        tableHeaders: [],
        tableData: []
    }

    componentDidMount() {
        const tableHeaders = ["Dessert", "Calories", "Fat", "carbs", "protein"]
        const tableData = [ 
            {label: "Name1", rowValues: ["col1", "col2", "col3", "col4"]},
            {label: "Name2", rowValues: ["col1", "col2", "col3", "col4"]},
            {label: "Name3", rowValues: ["col1", "col2", "col3", "col4"]},
            {label: "Name4", rowValues: ["col1", "col2", "col3", "col4"]},
            {label: "Name5", rowValues: ["col1", "col2", "col3", "col4"]},
        ]

        this.setState({tableHeaders, tableData})
    }

    handleUpdateOnClick = () => {
        const {selectedRows} = this.state
        if (selectedRows.length === 1) {
            this.props.handleUpdateOnClick()
        }
        else if (selectedRows.length > 1) {
            this.props.setErrorSnackBar("Please select only one item to update")
        }
        else {
            this.props.setErrorSnackBar("Please select atleast one item first!")
        }
    }

    handleDeleteOnClick = () => {
        const {selectedRows} = this.state
        if (selectedRows.length > 0) {
            this.props.handleDeleteOnClick()
        }
        else {
            this.props.setErrorSnackBar("Please select atleast one item first!")
        }
    }

    handleSearchOnClick = () => {
        const {searchValue} = this.state
        if (searchValue) {
            this.props.searchApi(searchValue)
        }
        else {
            this.props.setErrorSnackBar("Fields cannot be empty")
        }
    }

    handleCancelOnClick = () => {
        this.setState({selectedRows: [], selectedIndexes: []})
    }

    handleRowDataOnClick = (selectedRows, selectedIndexes) => {
        this.setState({selectedRows, selectedIndexes})
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
                <Grid item xs = {12} sm = {12} md = {6}>
                    <Grid container>
                        <Grid item xs = {12} sm = {12} md = {6}>
                            <SecondaryButton label = "Cancel" onClick = {this.handleCancelOnClick}/>
                        </Grid>
                    </Grid>
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
        const {tableHeaders, tableData} = this.state
        return (
            <div className = 'table_root'>
                <CustomTable
                    tableHeaders = {tableHeaders}
                    tableData = {tableData}
                    selectedIndexes = {this.state.selectedIndexes}
                    handleRowDataOnClick = {this.handleRowDataOnClick}
                />
            </div>
        )
    }

    renderSearch = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {6} sm = {6} md = {9}>
                    { this.renderInputField("searchValue", "Enter name") }
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