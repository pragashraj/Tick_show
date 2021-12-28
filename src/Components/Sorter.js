import React from 'react'

import Selector from './Selector'

//Material-UI
import { Card, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import GridView from '@mui/icons-material/GridView'
import FormatListBulleted from '@mui/icons-material/FormatListBulleted'
import useMediaQuery from '@mui/material/useMediaQuery'

const useStyles = makeStyles({
    root: {
        backgroundColor: "rgba(21, 67, 96, 0.3)", 
        padding: "5px",
        width: "100%"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        padding: "5px"
    },
    contentMobile: {
        display: "flex",
        flexDirection: "column",
        padding: "5px"
    },
    slection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: "20px",
        marginTop: "5px",
        marginBottom: "5px"
    },
    selectionLabel:{ 
        color: "#ffffff",
        textTransform: "uppercase",
        fontSize: "0.8rem",
        marginRight: "10px"
    },
    iconSelected: {
        color: "#ffffff"
    },
    iconNotSelected: {
        color: "gray"
    }
})

const Sorter = ({sort_data, values, handleChange}) => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:950px)')

    const renderGridIcon = () => (
        <IconButton aria-label = "add to favorites">
            <GridView className = {classes.iconSelected}/>
        </IconButton>
    )

    const renderListIcon = () => (
        <IconButton aria-label = "add to favorites">
            <FormatListBulleted className = {classes.iconNotSelected}/>
        </IconButton>
    )

    const renderSelector = (name, label, value, items) => (
        <div className = {classes.slection} key = {label}>
            <span className = {classes.selectionLabel}>{label}</span>
            <Selector name = {name} value = {value} menuItems = {items} handleChange = {handleChange}/>
        </div>
    )

    return (
        <Card className = {classes.root}>
            <div className = {classes.card}>
                <div className = { matches ? classes.content: classes.contentMobile}>
                    { sort_data.map(item => {
                        const {name, label, menuItems} = item
                        return renderSelector(name, label, values[name], menuItems)
                    }) }
                </div>
                <div>
                    { matches && renderGridIcon() }
                    { renderListIcon() }
                </div>
            </div>
        </Card>
    )
}

export default Sorter