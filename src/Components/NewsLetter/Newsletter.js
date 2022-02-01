import React from 'react'

//Material-UI
import {Paper, InputBase, Divider} from '@mui/material'

import './Newsletter.css'

const Newsletter = ({value, onChange, onSubmit}) => {
    return (
        <Paper
            component = "form"
            sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center',  height: 50 }}
        >
            <InputBase
                sx = {{ ml: 1, flex: 1 }}
                placeholder = "Email address"
                inputProps = {{ 'aria-label': 'Email address' }}
                value = {value}
                onChange = {onChange}
            />
            <Divider sx = {{ height: 28, m: 0.5 }} orientation = "vertical" />
            <button className = 'submit_btn' onClick = {onSubmit}>Subscribe Now</button>
        </Paper>
    )
}

export default Newsletter