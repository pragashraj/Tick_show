import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import SideBar from './SideBar'
import NewMovie from './NewMovie'
import NewEvent from './NewEvent'
import NewTheatre from './NewTheatre'
import UpdateOrDelete from './UpdateOrDelete'
import SnackBarAlert from '../../Components/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'
import Alert from '../../Components/Alert'
import {
    createNewMovie, 
    createNewEvent, 
    createNewTheatre,
    searchMovie,
    searchEvent,
    searchTheatre,
    updateMovieItem,
    deleteMovieItem,
    updateEventItem,
    deleteEventItem,
    updateTheatretItem,
    deleteTheatretItem
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
        openUpdatePopup: false
    }

    searchApi = async(searchValue) => {
        try {
            this.setState({loading: true})
            let response = null
            let token = null
            const {selectedMain} = this.state
            if (selectedMain === "Movies") {
                response = await searchMovie(searchValue, token)
            }
            else if (selectedMain === "Events") {
                response = await searchEvent(searchValue, token)
            }
            else if (selectedMain === "Theatres") {
                response = await searchTheatre(searchValue, token)
            }
            if (response) {
                
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
        }
    }

    updateItemApi = async(data) => {
        try {
            this.setState({loading: true})
            let response = null
            let token = null
            const {selectedMain} = this.state
            if (selectedMain === "Movies") {
                response = await updateMovieItem(data, token)
            }
            else if (selectedMain === "Events") {
                response = await updateEventItem(data, token)
            }
            else if (selectedMain === "Theatres") {
                response = await updateTheatretItem(data, token)
            }
            if (response) {
                
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
        }
    }

    deleteItemApi = async(data) => {
        try {
            this.setState({loading: true})
            let response = null
            let token = null
            const {selectedMain} = this.state
            if (selectedMain === "Movies") {
                response = await deleteMovieItem(data, token)
            }
            else if (selectedMain === "Events") {
                response = await deleteEventItem(data, token)
            }
            else if (selectedMain === "Theatres") {
                response = await deleteTheatretItem(data, token)
            }
            if (response) {
                
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar("server error, please try again")
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

    handleUpdate = () => {

    }

    handleDelete = () => {

    }

    handleUpdateOnClick = () => {
        this.setState({openUpdatePopup: !this.state.openUpdatePopup})
    }

    handleDeleteOnClick = () => { 
        this.setState({openDeleteAlertPopup: !this.state.openDeleteAlertPopup})
    }

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = (mainTab, tab, title) => {
        this.setState({ selectedMain: mainTab, childTab: tab, title })
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
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
            case "Reply" : child = null
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
            createNewEventApi = {this.createNewTheatreApi}
        />
    }

    renderUpdateOrDelete = () => {
        return <UpdateOrDelete
            searchApi = {this.searchApi}
            handleUpdateOnClick = {this.handleUpdateOnClick}
            handleDeleteOnClick = {this.handleDeleteOnClick}
            setErrorSnackBar = {this.setErrorSnackBar}
            openUpdatePopup = {this.state.openUpdatePopup}
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