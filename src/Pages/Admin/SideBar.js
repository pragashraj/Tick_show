import React from 'react'

//Material-UI
import {Paper} from '@mui/material'
import { makeStyles } from '@mui/styles'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import Theaters from '@mui/icons-material/Theaters'
import TheaterComedy from '@mui/icons-material/TheaterComedy'
import EmojiEvents from '@mui/icons-material/EmojiEvents'
import Forum from '@mui/icons-material/Forum'

const useStyles = makeStyles({
    tab: {
        color: "rgba(255, 255, 255, 0.7)",
    },
    transparency: {
        background : "transparent"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.7)",
    },
})

const SideBar = () => {
    const classes = useStyles()

    const TABS = [
        {label: "Movies"},
        {label: "Events"},
        {label: "Theatres"},
        {label: "Messages"},
    ]

    const ICON = {
        "Movies": <TheaterComedy className = {classes.icon}/>,
        "Events": <EmojiEvents className = {classes.icon}/>,
        "Theatres": <Theaters className = {classes.icon}/>,
        "Messages": <Forum className = {classes.icon}/>,
    }

    const handleClick = () => {

    }

    const renderListItem = (item) => {
        const {label} = item
        return (
            <Paper className = {classes.transparency} elevation = {5} sx = {{padding: "10px"}}>
                <ListItemButton onClick = {handleClick}>
                    <ListItemIcon> {ICON[label]} </ListItemIcon>
                    <ListItemText primary = {label} style = {{color: "#fff"}}/>
                    <ExpandMore className = {classes.icon}/>
                </ListItemButton>
                <Collapse in = {false} timeout = "auto" unmountOnExit>
                    <List component = "div" disablePadding>
                        <ListItemButton sx = {{ pl: 4 }}>
                            <ListItemIcon> <StarBorder/> </ListItemIcon>
                            <ListItemText primary = "Starred"/>
                        </ListItemButton>
                    </List>
                </Collapse>
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