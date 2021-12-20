import React from 'react'

import Search from './Search'
import StyledBreadcrumb from './StyledBreadcrumb'

//Material-UI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import useMediaQuery from '@mui/material/useMediaQuery'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import TheatersIcon from '@mui/icons-material/Theaters'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import ContactsIcon from '@mui/icons-material/Call'

import logo from '../assets/Icons/logo.png'

const NavBar = () => {
    const matches = useMediaQuery('(min-width:800px)')

    const NAV_LINKS = [
        {id: "1", label: "Home", href: "#", icon: <HomeIcon fontSize = "small" />},
        {id: "2", label: "Movies", href: "#", icon: <TheaterComedyIcon fontSize = "small" />},
        {id: "3", label: "Theatres", href: "#", icon: <TheatersIcon fontSize = "small" />},
        {id: "4", label: "Contacts", href: "#", icon: <ContactsIcon fontSize = "small" />},
    ]

    const renderLogo = () => (
        <img src = {logo} alt = "Tick Show"/>
    )

    const renderMenuIcon = () => (
        <IconButton
            size = "large"
            edge = "start"
            color = "inherit"
            aria-label = "open drawer"
            sx = {{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
    )

    const renderUserActionBtn = () => (
        <Box sx = {{ display: { md: 'flex' } }}>
            <IconButton
                size = "large"
                edge = "end"
                aria-label = "account of current user"
                aria-haspopup = "true"
                onClick = {() => {}}
                color = "inherit"
            >
                <AccountCircle />
            </IconButton>
        </Box>
    )

    const renderMobileBar = () => {
        return (
            <Toolbar>
                { renderMenuIcon() }
                { renderLogo() }
                <Box sx = {{ flexGrow: 1 }} />
                { renderUserActionBtn() }
            </Toolbar>
        )
    }

    const renderDesktopBar = () => {
        return (
            <Toolbar>
                { renderLogo() }
                <Search placeholder = "Search movies"/>
                <Box sx = {{ flexGrow: 1 }} />
                <Breadcrumbs aria-label = "nav-links">
                    { NAV_LINKS.map(item => <StyledBreadcrumb link = {item} key = {item.id}/> ) }
                </Breadcrumbs>
                <Box sx = {{ width: "50px" }} />
                { renderUserActionBtn() }
            </Toolbar>
        )
    }

    return (
        <AppBar position = "static" sx = {{backgroundColor: "#2C3E50"}}>
            { matches ?  renderDesktopBar() : renderMobileBar() }
        </AppBar>
    )
}

export default NavBar
