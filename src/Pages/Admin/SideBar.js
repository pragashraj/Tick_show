import React from 'react'

//Material-UI
import {Paper, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material'
import { makeStyles } from '@mui/styles'
import {ExpandMore, StarBorder, Theaters, TheaterComedy, EmojiEvents, Forum} from '@mui/icons-material'

const useStyles = makeStyles({
    transparency: {
        background : "transparent"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.7)",
    },
    selectedTab: {
        color: "rgb(20, 247, 247)",
    },
    secondaryIcon: {
        color: "rgba(255, 255, 255, 0.4)"
    }
})

const SideBar = ({values, handleTabOnClick, handleButtonOnClick}) => {
    const classes = useStyles()

    const TABS = [
        {label: "Movies", child: ["New Movie", "Update / Delete"]},
        {label: "Events", child: ["New Event", "Update / Delete"]},
        {label: "Theatres", child: ["New Theatre", "Update / Delete"]},
        {label: "Messages", child: ["Reply", "Update / Delete"]}
    ]

    const ICON = {
        "Movies": <TheaterComedy className = {classes.icon}/>,
        "Events": <EmojiEvents className = {classes.icon}/>,
        "Theatres": <Theaters className = {classes.icon}/>,
        "Messages": <Forum className = {classes.icon}/>,
    }

    const {mainTab, childTab} = values

    const renderChildTabs = (tab) => {
        return (
            <ListItemButton sx = {{ pl: 4 }} onClick = {() => handleTabOnClick(tab)}>
                <ListItemIcon> <StarBorder className = {classes.secondaryIcon}/> </ListItemIcon>
                <ListItemText primary = {tab} className = {childTab === tab ? classes.selectedTab : classes.icon}/>
            </ListItemButton>
        )
    }

    const renderCollapse = (label, child) => {
        return (
            <Collapse in = {mainTab === label} timeout = "auto" unmountOnExit>
                <List component = "div" disablePadding>
                    { child.map(i => renderChildTabs(i)) }
                </List>
            </Collapse>
        )
    }

    const renderListItemButton = (label) => {
        return (
            <ListItemButton onClick = {() => handleButtonOnClick(label)}>
                <ListItemIcon> {ICON[label]} </ListItemIcon>
                <ListItemText primary = {label} style = {{color: "#fff"}}/>
                <ExpandMore className = {classes.icon}/>
            </ListItemButton>
        )
    }

    const renderListItem = (item) => {
        const {label, child} = item
        return (
            <Paper className = {classes.transparency} elevation = {5} sx = {{padding: "10px"}}>
                { renderListItemButton(label) }
                { renderCollapse(label, child) }
            </Paper>
        )
    }

    return (
        <div className = 'sidebar-root'>
            <List sx = {{background: "transparent"}}>
                { TABS.map(i => renderListItem(i)) }
            </List>
        </div>
    )
}

export default SideBar