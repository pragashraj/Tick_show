import React from 'react'

//Material-UI
import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}))
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}))

const Search = ({placeholder, name, value, handleOnChange, handleEnterOnPress}) => {
    return (
        <SearchInput>
            <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
            <StyledInputBase 
                placeholder = {placeholder} 
                inputProps = {{ 'aria-label': 'search' }}
                name = {name}
                value = {value}
                onChange = {handleOnChange}
                onKeyDown = {e => e.key === 'Enter' && handleEnterOnPress()}
            />
        </SearchInput>
    )
}

export default Search