import React from 'react'

//Material-UI
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import Search from '@mui/icons-material/Search'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        backgroundColor: "#f4f5fa", 
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
        minWidth: "200px"
    },
    searchRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: "25px",
        height: "25px" ,
        color: "#4a4f59",
        marginRight: "5px"  
    },
})

const SearchInput = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: '100%',
}))
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}))

const CustomSearch = ({placeholder}) => {
    const classes = useStyles()

    return (
        <div className = {classes.root}>
            <div className = {classes.searchRoot}>
                <Search className = {classes.icon}/>
                <SearchInput>
                    <StyledInputBase placeholder = {placeholder} inputProps = {{ 'aria-label': 'search' }}/>
                </SearchInput>
            </div>
        </div>
    )
}

export default CustomSearch