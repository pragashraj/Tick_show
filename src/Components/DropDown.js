import React from 'react'

//Material-UI
import { Select, MenuItem } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

const SearchInput = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))
  
const StyledSelectBase = styled(Select)(({ theme }) => ({
    color: '#fff',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5, 1.5, 1.5, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        textTransform: "uppercase",
        fontSize: "0.7rem"
    },
}))

const DropDown = ({name, options, value, readOnly, handleOnChange}) => {
    return (
        <SearchInput autoComplete = 'off'>
            <StyledSelectBase 
                id = {`outlined-${name}`}
                readOnly = {readOnly}
                onChange = {handleOnChange}
                name = {name}
                value = {value}
                fullWidth
            >
            { options.map(i => <MenuItem value = {i} key = {i} sx = {{fontSize: "0.8rem"}}>{i}</MenuItem>) }
            </StyledSelectBase>
        </SearchInput>
    )
}

export default DropDown