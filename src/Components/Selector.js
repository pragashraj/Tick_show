import React from 'react'

//Material-UI
import { Box, MenuItem, FormControl, Select } from '@mui/material'

const Selector = ({name, value, menuItems, handleChange}) => {
    return (
        <Box sx = {{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId = "demo-simple-select-label"
                    id = "demo-simple-select"
                    value = {value}
                    onChange = {handleChange}
                    name = {name}
                    sx = {{borderRadius: "25px", height: "35px", padding: "5px", color: "#fff", fontSize: "0.8rem"}}
                    MenuProps = {{ disableScrollLock: true }}
                >
                { menuItems.map(i => <MenuItem value = {i} key = {i} sx = {{fontSize: "0.8rem"}}>{i}</MenuItem>) }
                </Select>
            </FormControl>
        </Box>
    )
}

export default Selector