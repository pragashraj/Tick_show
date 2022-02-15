import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import SideBar from './SideBar'

import './AdminPanel.css'

class AdminPanel extends Component {
    state = {
        mainTab: "Movies"
    }

    handleButtonOnClick = (label) => {
        this.setState({ mainTab: label })
    }

    handleTabOnClick = () => {
        
    }

    renderSideBar = () => {
        const {mainTab} = this.state
        const values = {mainTab}
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
                    <Grid item xs = {12} sm = {10} md = {9}></Grid>
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