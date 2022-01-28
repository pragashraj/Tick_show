import React from 'react'

//Material-UI
import { Backdrop } from '@mui/material'
import { makeStyles } from '@mui/styles'

import './Loading.css'

const useStyles = makeStyles({
    backdrop: {
        zIndex: 1,
        color: '#fff'
    }
})

const Loading = ({open}) => {
    const classes = useStyles()
    return (
        <Backdrop className = {classes.backdrop} open = {open}>
            <div className = "loader">Stand by...</div>
        </Backdrop>
    )
}

export default Loading