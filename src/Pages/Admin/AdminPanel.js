import React, { Component } from 'react'

//Material-UI
import {Grid} from '@mui/material'

import SideBar from './SideBar'

import './AdminPanel.css'

class AdminPanel extends Component {
    state = {
        tabValue: 0
    }

    handleTabOnClick = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }

    renderSideBar = () => {
        return (
            <div className = 'panel-side-bar'>
                <SideBar value = {this.state.tabValue} handleTabOnClick = {this.handleTabOnClick}/>
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