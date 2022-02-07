import React, {useState, useEffect} from 'react'

//Material-UI
import { 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    IconButton, 
    Typography, 
    Grid,
    Checkbox
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import CloseIcon from '@mui/icons-material/Close'
import CheckBoxOutlineBlankRounded from '@mui/icons-material/CheckBoxOutlineBlank'
import SquareRounded from '@mui/icons-material/SquareRounded'

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
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    rowName: {
        color: "grey",
        marginRight: "5px",
        fontSize: "0.6rem"
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

const TheatreSeatSelection = ({open, handleClose, handleChange}) => {
    const classes = useStyles()
    const [seatsLeft, setSeatsLeft] = useState([])
    const [seatsRight, setSeatsRight] = useState([])

    useEffect(() => {
        createSeats()
    }, [])

    const createSeats = () => {
        const rowLeft = ["A", "B", "C", "D", "E"]
        const rowRight = ["F", "G", "H", "I", "J"]
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        let seatsLeft = []
        let seatsRight = []

        rowLeft.forEach(e => {
            let row = {name: e, child: arr}
            seatsLeft.push(row)
        })

        rowRight.forEach(e => {
            let row = {name: e, child: arr}
            seatsRight.push(row)
        })

        setSeatsLeft(seatsLeft)
        setSeatsRight(seatsRight)
    }

    const renderCheckBox = (no, name, idx) => (
        <Checkbox
            icon = {<CheckBoxOutlineBlankRounded />}
            checkedIcon = {<SquareRounded />}
            sx = {{marginInline: "-8px"}}
            onChange = {(e) => handleChange(e, no, name)}
            key = {idx}
        />
    )

    const renderRow = (name, child) => (
        <div className = {classes.row} key = {name}>
            <span className = {classes.rowName}>{name}</span>
            { child.map((i, idx) => renderCheckBox(i, name, idx)) }
        </div>
    )

    const renderSeats = () => (
        <Grid container spacing = {2}>
            <Grid item xs = {6} sm = {6} md = {6}>
                { seatsLeft.map(i => renderRow(i.name, i.child)) }
            </Grid>
            <Grid item xs = {6} sm = {6} md = {6}>
                { seatsRight.map(i => renderRow(i.name, i.child)) }
            </Grid>
        </Grid>
    )

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
        <BootstrapDialog open = {open} fullWidth>
            <div style = {{backgroundColor: "#17202A"}}>
                { renderTitleBlock() }
                <DialogContent dividers>
                    <Typography gutterBottom className = {classes.screen}>
                        Screen
                    </Typography>
                    <Typography gutterBottom>
                        { renderSeats() }
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