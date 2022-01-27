import React from 'react'

//Material-UI
import { Grid, CssBaseline, useMediaQuery, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {Email, ShareLocation, Call} from '@mui/icons-material'

import contactImg from '../../assets/CarouselImages/cover.jpg'

const useStyles = makeStyles({
    cover: {
        backgroundImage: `url(${contactImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: "0"
    },
    contacts: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    contactWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        marginTop: "15vh"
    },
    contacthead: {
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "0.05rem"
    },
    shortDesc: {
        color: "silver"
    },
    infoRoot: {
        marginTop: "8vh",
        display: "flex",
        flexDirection: "column",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    infoIconRoot: {
        display: "flex",
        height: "60px",
        width: "60px",
        marginRight: "15px",
        margin: "0 10px 10px 0",
        textAlign: "center",
        lineHeight: "40px",
        borderRadius: "50%",
        transform: "all 0.2s ease",
        padding: "5px",
        border: "1px solid silver",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: "#fff", 
        width: "35px", 
        height: "35px"
    },
    value: {
        color: "silver", 
    }
})

const Cover = () => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:800px)')

    const renderInfoContainer = (icon, value) => (
        <div className = {classes.infoContainer}>
            <div className = {classes.infoIconRoot}>
                {icon}
            </div>
            <span className = {classes.value}>{value}</span>
        </div>
    )

    const renderContactsInfo = () => (
        <Grid container component = "main">
            <CssBaseline/>
            <Grid item xs = {false} sm = {false} md = {5}/>
            <Grid item xs = {12} sm = {12} md = {7} className = {classes.contacts}>
                <div className = {classes.contactWrapper}>
                    <h3 className = {classes.contacthead}>Let's get in touch</h3>
                    <span className = {classes.shortDesc}>
                        We're open for any suggestion or just to have a chat
                    </span>
                    <div className = {classes.infoRoot}>
                        { renderInfoContainer(<Email className = {classes.icon}/>, "info@yoursite.com") }
                        { renderInfoContainer(<ShareLocation className = {classes.icon}/>, "198 West 21th Street, Suite 721 New York NY 10016") }
                        { renderInfoContainer(<Call className = {classes.icon}/>, "+ 1235 2355 98") }
                    </div>
                </div>
            </Grid>
        </Grid>
    )

    return (
        <Grid item xs = {false} sm = {4} md = {7} className = {classes.cover} component = {Paper}>
            { matches && renderContactsInfo() }
        </Grid>
    )
}

export default Cover