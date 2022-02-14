import React from 'react'

//Material-UI
import {Tabs, Tab} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    tab: {
        color: "rgba(255, 255, 255, 0.7)"
    }
})

const SideBar = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }

    const tabs = ["Movies", "Events", "Theatres", "Messages"]

    const renderTab = (i) => {
        return (
            <Tab label = {i} className={classes.tab}/>
        )
    }

    return (
        <div className = 'sidebar-root'>
            <Tabs
                orientation = "vertical"
                variant = "scrollable"
                value = {value}
                onChange = {handleChange}
                sx = {{ borderRight: 1, borderColor: 'divider' }}
            >
                { tabs.map(i => renderTab(i)) }
            </Tabs>
        </div>
    )
}

export default SideBar