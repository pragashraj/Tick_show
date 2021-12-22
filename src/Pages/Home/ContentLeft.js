import React from 'react'

//Material-UI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import './Home.css'

const ContentLeft = ({item}) => {
    const {head, des, src} = item

    return (
        <div className = 'body_content_root'>
            <Box sx = {{ flexGrow: 1 }}>
                <Grid container spacing = {2}>
                    <Grid item xs = {12} sm = {6} md = {7}>
                        <div className = 'body_info_container'>
                            <h1>{head}</h1>
                            <p>{des}</p>
                        </div>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {5}>
                        <div className = 'content_img'>
                            <img src = {src} alt = {head} className = 'content_img_source'/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ContentLeft