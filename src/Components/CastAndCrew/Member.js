import React from 'react'

//Material-UI
import { Avatar } from '@mui/material'

import './CastAndCrew.css'
import castImg from '../../assets/images/cast.jpg'

const Member = () => {
    return (
        <div className = 'member_root'>
            <div className = 'avatar_container'>
                <Avatar alt = "Remy Sharp" src = {castImg} sx = {{width: "12vh", height: "12vh"}}/>
            </div>
        </div>
    )
}

export default Member