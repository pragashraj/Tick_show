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
import {createNewMovie, createNewEvent, createNewTheatre} from '../../api/admin'

import './AdminPanel.css'

class AdminPanel extends Component {
    state = {
        mainTab: "Movies",
        childTab: "New Movie",
        genreOptions: ["Action"],
        experienceOptions: ["2D", "3D"],
        showTypeOptions: ["Now Showing"],
        languageOptions: ["English"],
        eventCategoryOptions: [],
        eventShowTypeOptions: [],
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false
    }

    createNewMovieApi = async(data, file) => {
        try {
            this.setState({loading: true})
            const formData = this.createFormData(data, file)
            const response = await createNewMovie(formData)
            if(response) {
                this.setState({ loading: false })
                this.setSuccessSnackBar(response.message)
            }
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
                this.setState({ loading: false })
                this.setSuccessSnackBar(response.message)
            }
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
                this.setState({ loading: false })
                this.setSuccessSnackBar(response.message)
            }
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

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = (tab) => {
        this.setState({ childTab: tab })
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
        const {childTab, mainTab} = this.state
        let title = "", child = null

        switch (childTab) {
            case "New Movie" : title = "Create a new movie"
                child = this.renderNewMovie()
                break
            case "New Event" : title = "Create a new event"
                child = this.renderNewEvent()
                break
            case "New Theatre" : title = "Create a new theatre"
                child = this.renderNewTheatre()
                break
            case "Reply" : title = "Response to user's message"
                break
            default: title = `Update or Delete - ${mainTab}`
                child = this.renderUpdateOrDelete()
        }

        return {title, child}
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
        return <UpdateOrDelete/>
    }

    renderContents = () => {
        const {title, child} = this.getContent()
        return (
            <div className = 'panel-contents-root'>
                <h2>{title}</h2>
                <div className = 'panel-content-container'>{child}</div>
            </div>
        )
    }

    renderSideBar = () => {
        const {mainTab, childTab} = this.state
        const values = {mainTab, childTab}
        return (
            <div className = 'panel-side-bar'>
                <SideBar
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
        const {loading} = this.state
        return (
            <div className = 'admin-panel-root'>
                <div className = 'parallax'>
                    <div className = 'panel-top-padding'/>
                    { this.renderMainContainer() }
                </div>
                { this.renderSnackBar() }
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default AdminPanel