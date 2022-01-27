import React from 'react'

//Material-UI
import { InputBase } from '@mui/material'
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
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

const InputField = ({name, label, value, type, readOnly, handleOnChange}) => {
    return (
        <SearchInput autoComplete = 'off'>
            <StyledInputBase 
                id = {`outlined-${label}`}
                label = {label}
                type = {type}
                placeholder = {label}
                readOnly = {readOnly}
                onChange = {handleOnChange}
                name = {name}
                value = {value}
                fullWidth
                autoComplete = 'off'
            />
        </SearchInput>
    )
}

export default InputField