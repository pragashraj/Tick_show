import React from 'react'

//Material-UI
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'

import './Newsletter.css'

const Newsletter = () => {
    return (
        <Paper
            component = "form"
            sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center',  height: 50 }}
        >
            <InputBase
                sx = {{ ml: 1, flex: 1 }}
                placeholder = "Email address"
                inputProps = {{ 'aria-label': 'Email address' }}
            />
            <Divider sx = {{ height: 28, m: 0.5 }} orientation = "vertical" />
            <button type = "submit" className = 'submit_btn'>Subscribe Now</button>
        </Paper>
    )
}

export default Newsletter
