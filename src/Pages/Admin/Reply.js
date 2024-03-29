import React, { Component } from 'react'

//Material-UI
import {Grid, Modal, Backdrop, Fade, DialogActions} from '@mui/material'

import InputField from '../../Components/InputField'
import CustomButton from '../../Components/CustomCssButton/CustomButton'
import CustomTable from '../../Components/Table/CustomTable'
import SecondaryButton from '../../Components/CustomCssButton/SecondaryButton'
import Alert from '../../Components/Alert'
import Page from '../../Components/Page'
import {getMessages} from '../../api/admin'

import './AdminPanel.css'

class Reply extends Component {
    state = {
        selectedIndexes: [],
        selectedRows: [],
        tableHeaders: [],
        tableData: [],
        total: 0,
        current: 0,
        openReplyPopup: false,
        openDeleteAlertPopup: false,
        reply: ""
    }

    componentDidMount() {
        const t_Headers = ["Message", "Name", "Email", "Subject", "DateTime"]

        this.setState({tableHeaders: t_Headers})
        
        this.getMessagesApi(0)
    }

    getMessagesApi = async(page) => {
        try {
            this.props.setLoading(true)
            const response = await getMessages(page, this.props.token)
            if (response) {
                const {contats, total, current} = response
                this.setState({ tableData: contats, total, current })
            }
            this.props.setLoading(false)
        } catch (e) {
            this.props.setLoading(false)
            this.props.setErrorSnackBar("server error, please try again")
        }
    }

    handleReply = () => {
        const {selectedRows, reply} = this.state
        const selectedRow = selectedRows[0]
        const data = {message: selectedRow.message, email: selectedRow.email, reply}

        this.props.handleReply(data).then(res => {
            if (res.success) {
                this.handleReplyPopupState()
                this.props.setSuccessSnackBar(res.response.message)
            }
        })
    }

    handleDelete = () => {
        const {selectedRows} = this.state

        this.props.handleDelete(selectedRows).then(res => {
            if (res.success) {
                this.handleDeletePopupState()
                const {contats, total, current} = res.response
                this.setState({ tableData: contats, total, current })
                this.props.setSuccessSnackBar("Message(s) deleted successfully")
            }
        })
    }

    handleReplyOnClick = () => {
        const {selectedRows} = this.state
        if (selectedRows.length === 1) {
            if (selectedRows[0].isReplied) {
                this.props.setErrorSnackBar("Response has been already sent to this message!")
            }
            else
                this.handleReplyPopupState()
        }
        else if (selectedRows.length > 1) {
            this.props.setErrorSnackBar("Please select only one item to reply")
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

    handleModalCancelOnClick = () => {
        this.setState({ openReplyPopup: false })
    }

    handleCancelOnClick = () => {
        this.setState({selectedRows: [], selectedIndexes: []})
    }

    handleRowDataOnClick = (selectedRows, selectedIndexes) => {
        this.setState({selectedRows, selectedIndexes})
    }

    handleDeletePopupState = () => {
        this.setState({openDeleteAlertPopup: !this.state.openDeleteAlertPopup})
    }

    handleReplyPopupState = () => {
        this.setState({openReplyPopup: !this.state.openReplyPopup})
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
            <div className = "pagination_root">
                <Page 
                    count = {total} 
                    page = {current} 
                    onChange = {this.handlePaginationOnChange}
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

    renderReplyPopup = () => {
        const {openReplyPopup} = this.state
        return (
            <Modal
                open = {openReplyPopup}
                onClose = {this.handleModalCancelOnClick}
                closeAfterTransition
                BackdropComponent = {Backdrop}
                BackdropProps = {{ timeout: 500 }}
                sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <Fade in = {openReplyPopup}>
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
                    tab = "Messages"
                    tableHeaders = {tableHeaders}
                    tableData = {tableData}
                    selectedIndexes = {selectedIndexes}
                    handleRowDataOnClick = {this.handleRowDataOnClick}
                />
            </div>
        )
    }

    render() {
        const {tableData, openReplyPopup, openDeleteAlertPopup} = this.state
        return (
            <div className = 'new-movie-root'>
                {
                    tableData.length > 0 ? 
                    <div>
                        { this.renderTableContent() }
                        { this.renderPagination() }
                        { this.renderBtnFooter() }
                    </div>
                    :
                    this.renderNoDataAvailable()
                }
                { openReplyPopup && this.renderReplyPopup() }
                { openDeleteAlertPopup && this.renderDeleteAlert() }
            </div>
        )
    }
}

export default Reply