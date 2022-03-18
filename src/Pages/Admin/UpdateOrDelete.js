import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomTable from '../../Components/Table/CustomTable'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'
import UpdatePopup from './UpdatePopup'
import Alert from '../../Components/Alert'
import Page from '../../Components/Page'
import {getEvents} from '../../api/events'
import {getTheatres} from '../../api/theatres'
import {getMovies} from '../../api/movie'

import './AdminPanel.css'

class UpdateOrDelete extends Component {
    state = {
        searchValue: "",
        selectedIndexes: [],
        selectedRows: [],
        tableHeaders: [],
        tableData: [],
        total: 0,
        current: 0,
        openUpdatePopup: false,
        openDeleteAlertPopup: false,
    }

    TABLE_HEADERS = {
        "Movies": ["Name", "Duration", "ReleaseDate", "Experience", "Genre(s)"],
        "Events": ["Name", "Address", "Contact", "Price", "Location"],
        "Theatres": ["Name", "Address", "Contact", "Rate", "Location"]
    }

    componentDidMount() {
        const tab = this.props.selectedTab

        switch(tab) {
            case "Movies": this.getMoviesApi()
                break
            case "Events": this.getEventsApi()
                break
            case "Theatres": this.getTheatresApi()
                break
            default: return
        }
    }

    getEventsApi = async(page) => {
        try {
            this.props.setLoading(true)
            const response = await getEvents(page, 10)
            if (response) {
                this.loadData(response)
            }
            this.props.setLoading(false)
        } catch (e) {
            this.props.setLoading(false)
            this.props.setErrorSnackBar("server error, please try again")
        }
    }

    getTheatresApi = async(page) => {
        try {
            this.props.setLoading(true)
            const response = await getTheatres(page, 10)
            if (response) {
                this.loadData(response)
            }
            this.props.setLoading(false)
        } catch (e) {
            this.props.setLoading(false)
            this.props.setErrorSnackBar("server error, please try again")
        }
    }

    getMoviesApi = async(page) => {
        try {
            this.props.setLoading(true)
            const response = await getMovies(page, 10)
            if (response) {
                this.loadData(response)
            }
            this.props.setLoading(false)
        } catch (e) {
            this.props.setLoading(false)
            this.props.setErrorSnackBar("server error, please try again")
        }
    }

    loadData = (response) => {
        const tab = this.props.selectedTab
        const t_Headers = this.TABLE_HEADERS[tab]
        const {total, current} = response
        let t_Data = null
        
        switch(tab) {
            case "Movies": t_Data = response.movies
                break
            case "Events": t_Data = response.events
                break
            case "Theatres": t_Data = response.theatres
                break
            default: t_Data = null
        }

        this.setState({ tableHeaders: t_Headers, tableData: t_Data, total, current })
    }

    handleUpdate = () => {
        this.props.handleUpdate().then(res => {
            if (res.success) {
                this.handleUpdatePopupState()
            }
        })
    }

    handleDelete = () => {
        const {selectedRows} = this.state
        this.props.handleDelete(selectedRows).then(res => {
            if (res.success) {
                this.handleDeletePopupState()
            }
        })
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
            this.handleDeletePopupState()
        }
        else {
            this.props.setErrorSnackBar("Please select atleast one item first!")
        }
    }

    handleSearchOnClick = () => {
        const {searchValue} = this.state
        if (searchValue) {
            this.props.handleSearch(searchValue).then(res => {
                if (res.success) {
                    this.setState({searchValue: ""})
                }
            })
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

    handleUpdatePopupState = () => {
        this.setState({openUpdatePopup: !this.state.openUpdatePopup})
    }

    handleDeletePopupState = () => {
        this.setState({openDeleteAlertPopup: !this.state.openDeleteAlertPopup})
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handlePaginationOnChange = (event, page) => {
        this.setState({ current: page })
    }

    renderPagination = () => {
        const {total, current} = this.state
        return (
            <Page 
                count = {total} 
                page = {current} 
                onChange = {this.handlePaginationOnChange}
            />
        )
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

    renderDeleteAlert = () => {
        const {openDeleteAlertPopup} = this.state
        return <Alert 
            open = {openDeleteAlertPopup}
            handleClose = {this.handleDeleteOnClick}
            handleDelete = {this.handleDelete}
        />
    }

    renderUpdatePopup = () => {
        const {openUpdatePopup, tableHeaders, selectedRows} = this.state
        const values = {fields: tableHeaders, selectedRow: selectedRows[0]}
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
                    tab = {this.props.selectedTab}
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
        const {tableData, openUpdatePopup, openDeleteAlertPopup} = this.state
        return (
            <div className = 'new-movie-root'>
                {
                    tableData.length > 0 ?
                    <div>
                        { this.renderSearch() }
                        { this.renderTableContent() }
                        { this.renderPagination() }
                        { this.renderBtnFooter() }
                    </div>
                    :
                    this.renderNoDataAvailable()
                }
                { openUpdatePopup && this.renderUpdatePopup() }
                { openDeleteAlertPopup && this.renderDeleteAlert() }
            </div>
        )
    }
}

export default UpdateOrDelete