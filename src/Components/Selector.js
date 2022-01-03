import React from 'react'

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
                    sx = {{borderRadius: "25px", height: "35px", padding: "5px", color: "#fff"}}
                    MenuProps = {{ disableScrollLock: true }}
                >
                { menuItems.map(i => <MenuItem value = {i} key = {i}>{i}</MenuItem>) }
                </Select>
            </FormControl>
        </Box>
    )
}

export default Selector