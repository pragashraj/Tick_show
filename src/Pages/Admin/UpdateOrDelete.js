import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomTable from '../../Components/Table/CustomTable'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'
import UpdatePopup from './UpdatePopup'

import './AdminPanel.css'

class UpdateOrDelete extends Component {
    state = {
        searchValue: "",
        selectedIndexes: [],
        selectedRows: [],
        tableHeaders: [],
        tableData: [],
        openUpdatePopup: false,
        fields: []
    }

    componentDidMount() {
        const t_Headers = ["Dessert", "Calories", "Fat", "carbs", "protein"]
        const t_Data = [ 
            {label: "Name1", rowValues: ["col1", "col2", "col3", "col4"]},
            {label: "Name2", rowValues: ["col5", "col6", "col7", "col8"]},
            {label: "Name3", rowValues: ["col9", "col0", "col11", "col12"]},
            {label: "Name4", rowValues: ["col13", "col14", "col15", "col16"]},
            {label: "Name5", rowValues: ["col17", "col18", "col19", "col20"]}
        ]
        const fields = t_Headers.slice(1, t_Headers.length)

        this.setState({tableHeaders: t_Headers, tableData: t_Data, fields})
    }

    handleUpdatePopupState = () => {
        this.setState({openUpdatePopup: !this.state.openUpdatePopup})
    }

    handleUpdateOnClick = () => {
        const {selectedRows} = this.state
        if (selectedRows.length === 1) {
            this.handleUpdatePopupState()
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
            this.props.handleDeleteOnClick(selectedRows)
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

    renderNoDataAvailable = () => {
        return (
            <div className = "no_data_container">
                <div className = "no_data">
                    <h1>No Data Available</h1>
                </div>
            </div>
        )
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

    renderUpdatePopup = () => {
        const {openUpdatePopup, fields, selectedRows} = this.state
        const values = {fields, selectedRow: selectedRows[0]}
        return <UpdatePopup
            open = {openUpdatePopup}
            values = {values}
            handleCancel = {this.handleUpdatePopupState}
            handleUpdate = {this.handleUpdate}
            handleInputOnChange = {this.handleInputOnChange}
        />
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
        const {tableHeaders, tableData, selectedIndexes} = this.state
        return (
            <div className = 'table_root'>
                <CustomTable
                    tableHeaders = {tableHeaders}
                    tableData = {tableData}
                    selectedIndexes = {selectedIndexes}
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
        const {tableData, openUpdatePopup} = this.state
        return (
            <div className = 'new-movie-root'>
                {
                    tableData.length > 0 ? 
                    <div>
                        { this.renderSearch() }
                        { this.renderTableContent() }
                        { this.renderBtnFooter() }
                    </div>
                    :
                    this.renderNoDataAvailable() 
                }
                { openUpdatePopup && this.renderUpdatePopup() }
            </div>
        )
    }
}

export default UpdateOrDelete