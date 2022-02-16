import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import SideBar from './SideBar'

import './AdminPanel.css'

class AdminPanel extends Component {
    state = {
        mainTab: "Movies",
        childTab: "New Movie"
    }

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = (tab) => {
        this.setState({ childTab: tab })
    }

    getContentTitle = () => {
        const {childTab, mainTab} = this.state
        let title = ""

        switch (childTab) {
            case "New Movie" : title = "Create a new movie"
                break
            case "New Event" : title = "Create a new event"
                break
            case "New Theatre" : title = "Create a new theatre"
                break
            case "Reply" : title = "Response to user's message"
                break
            default: title = `Update or Delete - ${mainTab}`
        }

        return title
    }

    renderContents = () => {
        return (
            <div className = 'panel-contents-root'>
                <h2>{ this.getContentTitle() }</h2>
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