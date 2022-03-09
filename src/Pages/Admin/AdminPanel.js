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

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = (tab) => {
        this.setState({ childTab: tab })
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
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
        />
    }

    renderNewEvent = () => {
        return <NewEvent
            options = {this.state}
        />
    }

    renderNewTheatre = () => {
        return <NewTheatre/>
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