import React, {useState, useEffect} from 'react'

import Search from '../Search'
import StyledBreadcrumb from '../StyledBreadcrumb'

//Material-UI
import Breadcrumbs from '@mui/material/Breadcrumbs'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import TheatersIcon from '@mui/icons-material/Theaters'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import ContactsIcon from '@mui/icons-material/Call'

import logo from '../../assets/Icons/logo.png'

import './AppBar.css'

const AppBar = () => {
    const [scrolled, setScrolled] = useState(false)

    const matches = useMediaQuery('(min-width:1200px)')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        const offset = window.scrollY
        
        if (offset > 150 ) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
  
    let style = ['top_nav']

    if (scrolled) {
        style.push('scrolled')
    }

    const NAV_LINKS = [
        {label: "Home", href: "/", icon: <HomeIcon fontSize = "small" />},
        {label: "Movies", href: "/movies", icon: <TheaterComedyIcon fontSize = "small" />},
        {label: "Theatres", href: "/theatres", icon: <TheatersIcon fontSize = "small" />},
        {label: "Contacts", href: "#", icon: <ContactsIcon fontSize = "small" />},
    ]

    const renderUserActionBtn = () => (
        <Box sx = {{ display: { md: 'flex' } }}>
            <IconButton size = "large" edge = "end" aria-haspopup = "true">
                <AccountCircle sx = {{color: "#fff"}}/>
            </IconButton>
        </Box>
    )

    const renderMenuIcon = () => (
        <IconButton size = "large" edge = "start" sx = {{ mr: 2 }}>
            <MenuIcon sx = {{color: "#fff"}}/>
        </IconButton>
    )

    const renderMobileBar = () => {
        return (
            <div className = 'top_nav_container'>
                <div className = 'row'>
                    { renderMenuIcon() }
                    <img src = {logo} alt = "Tick Show" style = {{width: "80px", marginLeft: "-15px"}}/>
                </div>
                { renderUserActionBtn() }
            </div>
        )
    }

    const renderDesktopBar = () => {
        return (
            <div className = 'top_nav_container'>
                <div className = 'row'>
                    <img src = {logo} alt = "Tick Show" style = {{width: "100px"}}/>
                    <Search placeholder = "Search movies"/>
                </div>
                <div className = 'row'>
                    <Breadcrumbs aria-label = "nav-links">
                        { NAV_LINKS.map((item, idx) => <StyledBreadcrumb link = {item} key = {idx}/> ) }
                    </Breadcrumbs>
                    <a href = "/" className = "nav-link">Join Now</a>
                </div>
            </div>
        )
    }

    return (
        <div className = {style.join(" ")}>
            { matches ? renderDesktopBar() : renderMobileBar() }
        </div>
    )
}

export default AppBar