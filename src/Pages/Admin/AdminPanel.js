import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import SideBar from './SideBar'
import NewMovie from './NewMovie'
import NewEvent from './NewEvent'
import NewTheatre from './NewTheatre'
import UpdateOrDelete from './UpdateOrDelete'
import Reply from './Reply'
import SnackBarAlert from '../../Components/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'
import Alert from '../../Components/Alert'
import {
    createNewMovie, 
    createNewEvent, 
    createNewTheatre,
    searchApi,
    updateApi,
    deleteApi
} from '../../api/admin'
import Panel from './Panel.json'

import './AdminPanel.css'

class AdminPanel extends Component {
    state = {
        mainTab: "Movies",
        childTab: "New Movie",
        title: "Create a new movie",
        selectedMain: "Movies",
        genreOptions: ["Action"],
        experienceOptions: ["2D", "3D"],
        showTypeOptions: ["Now Showing"],
        languageOptions: ["English"],
        eventCategoryOptions: [],
        eventShowTypeOptions: [],
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        openDeleteAlertPopup: false,
        selectedRowsToDelete: []
    }

    handleSearchApi = async(searchValue) => {
        try {
            this.setState({loading: true})
            let token = null
            const endPoint = this.getEndPointForUpdateDelete()
            const response = await searchApi(endPoint, searchValue, token)
            this.setState({ loading: false })
            return {success: true, response}
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
            return {success: false, response: null}
        }
    }

    handleUpdateItemApi = async(data) => {
        try {
            this.setState({loading: true})
            let token = null
            const endPoint = this.getEndPointForUpdateDelete()
            const response = await updateApi(endPoint, data, token)
            this.setState({ loading: false })
            return {success: true, response}
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
            return {success: false, response: null}
        }
    }

    handleDeleteItemApi = async(data) => {
        try {
            this.setState({loading: true})
            let token = null
            const endPoint = this.getEndPointForUpdateDelete()
            const response = await deleteApi(endPoint, data, token)
            this.setState({ loading: false })
            return {success: true, response}
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
            return {success: false, response: null}
        }
    }

    createNewMovieApi = async(data, file) => {
        try {
            this.setState({loading: true})
            const formData = this.createFormData(data, file)
            const response = await createNewMovie(formData)
            if(response) {
                this.setSuccessSnackBar(response.message)
            }
            this.setState({ loading: false })
            return true
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
            return false
        }
    }

    createNewEventApi = async(data, file) => {
        try {
            this.setState({loading: true})
            const formData = this.createFormData(data, file)
            const response = await createNewEvent(formData)
            if(response) {
                this.setSuccessSnackBar(response.message)
            }
            this.setState({ loading: false })
            return true
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
            return false
        }
    }

    createNewTheatreApi = async(data, file) => {
        try {
            this.setState({loading: true})
            const formData = this.createFormData(data, file)
            const response = await createNewTheatre(formData)
            if(response) {
                this.setSuccessSnackBar(response.message)
            }
            this.setState({ loading: false })
            return true
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
            return false
        }
    }

    createFormData = (data, file) => {
        let formData = new FormData()
        let json = JSON.stringify(data)
        let blob = new Blob([json], { type: 'application/json' })
        formData.append("file", file)
        formData.append("request", blob)

        return formData
    }

    handleDelete = () => {
        const {selectedRowsToDelete} = this.state

        if (selectedRowsToDelete.length > 0) {
            this.handleDeleteItemApi(selectedRowsToDelete)
        }
    }

    handleDeleteOnClick = (selectedRows) => {
        const {openDeleteAlertPopup} = this.state
        this.setState({
            openDeleteAlertPopup: !openDeleteAlertPopup,
            selectedRowsToDelete: openDeleteAlertPopup ? [] : selectedRows
        })
    }

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = (mainTab, tab, title) => {
        this.setState({ selectedMain: mainTab, childTab: tab, title })
    }

    handleSnackBarClose = () => {
        this.setSnackBar(this.state.severity, null, false)
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    getEndPointForUpdateDelete = () => {
        const {selectedMain} = this.state
        let endPoint = ""

        switch (selectedMain) {
            case "Movies": endPoint = "movie"
                break
            case "Events": endPoint = "event"
                break
            case "Theatres": endPoint = "theatre"
                break
            default: endPoint = ""
        }
        
        return endPoint
    }

    getContent = () => {
        const {childTab} = this.state
        let child = null

        switch (childTab) {
            case "New Movie" : child = this.renderNewMovie()
                break
            case "New Event" : child = this.renderNewEvent()
                break
            case "New Theatre" : child = this.renderNewTheatre()
                break
            case "Reply" : child = this.renderReply()
                break
            default: child = this.renderUpdateOrDelete()
        }

        return child
    }

    renderDeleteAlert = (open) => {
        return <Alert 
            open = {open}
            handleClose = {this.handleDeleteOnClick}
            handleDelete = {this.handleDelete}
        />
    }

    renderSnackBar = () => {
        const {openSnackBar, severity, message} = this.state
        return (
            <SnackBarAlert 
                open = {openSnackBar} 
                severity = {severity} 
                message = {message} 
                handleClose = {this.handleSnackBarClose}
            />
        )
    }

    renderReply = () => {
        return <Reply
            handleDeleteOnClick = {this.handleDeleteOnClick}
            setErrorSnackBar = {this.setErrorSnackBar}
        />
    }

    renderNewMovie = () => {
        return <NewMovie
            options = {this.state}
            setErrorSnackBar = {this.setErrorSnackBar}
            createNewMovieApi = {this.createNewMovieApi}
        />
    }

    renderNewEvent = () => {
        return <NewEvent
            options = {this.state}
            setErrorSnackBar = {this.setErrorSnackBar}
            createNewEventApi = {this.createNewEventApi}
        />
    }

    renderNewTheatre = () => {
        return <NewTheatre
            setErrorSnackBar = {this.setErrorSnackBar}
            createNewTheatreApi = {this.createNewTheatreApi}
        />
    }

    renderUpdateOrDelete = () => {
        return <UpdateOrDelete
            searchApi = {this.handleSearchApi}
            handleDeleteOnClick = {this.handleDeleteOnClick}
            setErrorSnackBar = {this.setErrorSnackBar}
            openUpdatePopup = {this.state.openUpdatePopup}
            handleUpdate = {this.handleUpdateItemApi}
        />
    }

    renderContents = () => {
        const {title} = this.state
        const child = this.getContent()
        return (
            <div className = 'panel-contents-root'>
                <h2>{title}</h2>
                <div className = 'panel-content-container'>{child}</div>
            </div>
        )
    }

    renderSideBar = () => {
        const {mainTab, childTab, selectedMain} = this.state
        const values = {mainTab, childTab, selectedMain}
        return (
            <div className = 'panel-side-bar'>
                <SideBar
                    tabs = {Panel.sideBarTabs}
                    values = {values}
                    handleTabOnClick = {this.handleTabOnClick}
                    handleButtonOnClick = {this.handleButtonOnClick}
                />
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'panel-main-container'>
                <Grid container spacing = {2}>
                    <Grid item xs = {12} sm = {2} md = {3}>
                        { this.renderSideBar() }
                    </Grid>
                    <Grid item xs = {12} sm = {10} md = {9}>
                        { this.renderContents() }
                    </Grid>
                </Grid>
            </div>
        )
    }

    render() {
        const {loading, openDeleteAlertPopup} = this.state
        return (
            <div className = 'admin-panel-root'>
                <div className = 'parallax'>
                    <div className = 'panel-top-padding'/>
                    { this.renderMainContainer() }
                </div>
                { this.renderSnackBar() }
                { this.renderDeleteAlert(openDeleteAlertPopup) }
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default AdminPanel