import React from 'react'

//Material-UI
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import CloseIcon from '@mui/icons-material/Close'

import seatImg from '../assets/images/seat.png'

const useStyles = makeStyles({
    screen: {
        width: "100%",
        height: "5vh",
        backgroundColor: "#f74e30",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textTransform: "uppercase",
        color: "#fff",
        fontSize: "0.8rem",
        letterSpacing: "0.05rem",
        marginBottom: "25px"
    },
    fakeSeat: {
        width: "100%",
    }
})

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))

const TheatreSeatSelection = ({open, handleClose}) => {
    const classes = useStyles()

    const renderTitleBlock = () => (
        <DialogTitle sx = {{ m: 0, p: 2, color: "#fff" }}>
            SEAT ALLOCATION
            <IconButton onClick = {handleClose}
                sx = {{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
    )

    return (
        <BootstrapDialog open = {open}>
            <div style = {{backgroundColor: "#17202A"}}>
                { renderTitleBlock() }
                <DialogContent dividers>
                    <Typography gutterBottom className = {classes.screen}>
                        Screen
                    </Typography>
                    <Typography gutterBottom>
                        <img src = {seatImg} alt = "fake_seat" className = {classes.fakeSeat}/>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick = {handleClose} sx = {{color: "#fff"}}> Confirm & Continue </Button>
                </DialogActions>
            </div>
        </BootstrapDialog>
    )
}

export default TheatreSeatSelection