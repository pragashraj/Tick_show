import React, { Component } from 'react'

//Material-UI
import {Grid, Modal, Backdrop, Fade, DialogActions} from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomTable from '../../Components/Table/CustomTable'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'

import './AdminPanel.css'

class Reply extends Component {
    state = {
        selectedIndexes: [],
        selectedRows: [],
        tableHeaders: [],
        tableData: [],
        openReplyPopup: false,
        reply: ""
    }

    componentDidMount() {
        const t_Headers = ["Message", "Name", "Email", "Subject", "DateTime"]
        const t_Data = [ 
            {label: "Name1", rowValues: ["col1", "col2", "col3", "col4"]},
            {label: "Name2", rowValues: ["col5", "col6", "col7", "col8"]},
            {label: "Name3", rowValues: ["col9", "col0", "col11", "col12"]},
            {label: "Name4", rowValues: ["col13", "col14", "col15", "col16"]},
            {label: "Name5", rowValues: ["col17", "col18", "col19", "col20"]}
        ]

        this.setState({tableHeaders: t_Headers, tableData: t_Data})
    }

    handleReply = () => {

    }

    handleReplyPopupState = () => {
        this.setState({openReplyPopup: !this.state.openReplyPopup})
    }

    handleReplyOnClick = () => {
        const {selectedRows} = this.state
        if (selectedRows.length === 1) {
            this.handleReplyPopupState()
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

    handleModalCancelOnClick = () => {
        this.setState({ openReplyPopup: false })
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

    renderReplyPopup = (open) => {
        return (
            <Modal
                open = {open}
                onClose = {this.handleModalCancelOnClick}
                closeAfterTransition
                BackdropComponent = {Backdrop}
                BackdropProps = {{ timeout: 500 }}
                sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <Fade in = {open}>
                    <div className = 'modal_paper'>
                        <h2 id = "transition-modal-title">Reply</h2>
                        <div className = 'modal_form'>
                            { this.renderInputField("reply", "Enter reply to user") }
                        </div>
                        <DialogActions>
                            <SecondaryButton label = "Cancel" onClick = {this.handleModalCancelOnClick}/>
                            <CustomButton label = "Confirm & Reply" onClick = {this.handleReply}/>
                        </DialogActions>
                    </div>
                </Fade>
            </Modal>
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

    renderNoDataAvailable = () => {
        return (
            <div className = "no_data_container">
                <div className = "no_data">
                    <h1>No Data Available</h1>
                </div>
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
                    <CustomButton label = "Reply" onClick = {this.handleReplyOnClick}/>
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

    render() {
        const {tableData, openReplyPopup} = this.state
        return (
            <div className = 'new-movie-root'>
                {
                    tableData.length > 0 ? 
                    <div>
                        { this.renderTableContent() }
                        { this.renderBtnFooter() }
                    </div>
                    :
                    this.renderNoDataAvailable()
                }
                { this.renderReplyPopup(openReplyPopup) }
            </div>
        )
    }
}

export default Reply