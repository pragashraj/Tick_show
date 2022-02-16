import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import SideBar from './SideBar'
import NewMovie from './NewMovie'

import './AdminPanel.css'

class AdminPanel extends Component {
    state = {
        mainTab: "Movies",
        childTab: "New Movie",
        movieName: "",
        movieFile: null,
        movieFileOnLoad: null,
    }

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = (tab) => {
        this.setState({ childTab: tab })
    }

    handlFileRemoveOnClick = (onLoadState, fileState) => {
        this.setState({ [onLoadState] : null, [fileState]: null })
    }

    handleFileOnChange = (onLoadState, fileState, file) => {
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({ [onLoadState] : reader.result })
        }
        reader.readAsDataURL(file)
        this.setState({ [fileState]: file })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    getContent = () => {
        const {childTab, mainTab} = this.state
        let title = ""
        let child = null

        switch (childTab) {
            case "New Movie" : 
                title = "Create a new movie"
                child = this.renderNewMovie()
                break
            case "New Event" : title = "Create a new event"
                break
            case "New Theatre" : title = "Create a new theatre"
                break
            case "Reply" : title = "Response to user's message"
                break
            default: title = `Update or Delete - ${mainTab}`
        }

        return {title, child}
    }

    renderNewMovie = () => {
        const {movieName} = this.state
        const values = {movieName}
        return <NewMovie 
            values = {values} 
            handleInputOnChange = {this.handleInputOnChange}
            handleFileOnChange = {this.handleFileOnChange}
            handlFileRemoveOnClick = {this.handlFileRemoveOnClick}
        />
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
        return (
            <div className = 'admin-panel-root'>
                <div className = 'parallax'>
                    <div className = 'panel-top-padding'/>
                    { this.renderMainContainer() }
                </div>
            </div>
        )
    }
}

export default AdminPanel