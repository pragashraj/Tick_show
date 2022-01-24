import React from 'react'

//Material-UI
import {Box, Drawer, List, Divider, ListItem, ListItemIcon, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import HomeIcon from '@mui/icons-material/Home'
import TheatersIcon from '@mui/icons-material/Theaters'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import ContactsIcon from '@mui/icons-material/Call'
import EmojiEvents from '@mui/icons-material/EmojiEvents'

import './Drawer.css'
import logo from '../../assets/Icons/logo.png'

const useStyles = makeStyles({
    icon: {
        color: "#fff"
    },
    link: {
        color: "#fff", 
        textTransform: "uppercase",
        fontSize: "0.8rem",
        letterSpacing: "0.1rem",
        textDecoration: "none"
    },
    divider: {
        backgroundColor: "#fff",
        marginTop: "5px",
        marginBottom: "10px"
    },
    title: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: "1.1rem",
        letterSpacing: "0.2rem",
        marginTop: "-15px"
    }
})

const DrawerPanel = ({open, handleDrawer}) => {
    const classes = useStyles()

    const NAV_LINKS = [
        {label: "Home", href: "/", icon: <HomeIcon/>},
        {label: "Movies", href: "/movies", icon: <TheaterComedyIcon/>},
        {label: "Theatres", href: "/theatres", icon: <TheatersIcon/>},
        {label: "Contacts", href: "/contacts", icon: <ContactsIcon/>},
        {label: "Events", href: "/events", icon: <EmojiEvents/>}
    ]

    const renderNavLinks = () => (
        <List>
            { NAV_LINKS.map((item, idx) => (
                <ListItem key = {idx}>
                    <ListItemIcon className = {classes.icon}>
                        {item.icon}
                    </ListItemIcon>
                    <a href = {item.href} className = {classes.link}>{item.label}</a>
                </ListItem>
            )) }
        </List>
    )

    const renderPanelItems = () => (
        <Box sx = {{ width: 250 }} role = "presentation" className = 'drawer_parallax'>
            <List>
                <ListItem>
                    <img src = {logo} alt = "Tick Show" style = {{width: "100px"}}/> 
                </ListItem>
                <ListItem>
                    <Typography className = {classes.title}>Tick Show</Typography>
                </ListItem>
            </List> 
            { renderNavLinks() }
            <Divider className = {classes.divider}/>
            <List>
                <ListItem>
                    <a href = "/" className = "login_btn">LOGIN</a>
                </ListItem>
                <ListItem>
                    <a href = "/" className = "join_btn">Join Now</a>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Drawer
            anchor = "left"
            open = {open}
            onClose = {handleDrawer}
        >
            { renderPanelItems() }
        </Drawer>
    )
}

export default DrawerPanel
