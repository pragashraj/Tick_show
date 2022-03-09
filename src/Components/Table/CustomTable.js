import React from 'react'

//Material-UI
import {TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, FormControlLabel} from '@mui/material'

const CustomTable = () => {
    const [selected, setSelected] = React.useState([])

    const isSelected = (name) => selected.indexOf(name) !== -1

    const tableHeaders = ["Dessert", "Calories", "Fat", "carbs", "protein"]
    const tableData = [
        {label: "Name", rowValues: ["col1", "col2", "col3", "col4"]}
    ]

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []
    
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            )
        }
    
        setSelected(newSelected)
    }

    const renderCheckBox = (isItemSelected, label) => (
        <FormControlLabel 
            control = {<Checkbox color = 'primary' checked = {isItemSelected}/>} 
            label = {label}
            sx = {{color: "rgba(255, 255, 255, 0.7)"}}
        />
    )

    const renderRowData = (val, idx) => (
        <TableCell align = "right" key = {idx} sx = {{color: "rgba(255, 255, 255, 0.7)"}}>
            {val}
        </TableCell>
    )

    const renderTableRow = (row, idx) => {
        const {label, rowValues} = row
        const isItemSelected = isSelected(label)
        return (
            <TableRow
                hover
                onClick = {(e) => handleClick(e, label)}
                role = "checkbox"
                aria-checked = {isItemSelected}
                tabIndex = {-1}
                key = {idx}
                selected = {isItemSelected}
            >
                <TableCell padding = "checkbox">{ renderCheckBox(isItemSelected, label) }</TableCell>
                { rowValues.map((val, idx) => renderRowData(val, idx)) }
            </TableRow>
        )
    }

    const renderTableBody = () => {
        return (
            <TableBody>
                { tableData.map((row, idx) => renderTableRow(row, idx)) }
            </TableBody>
        )
    }

    const renderTableHead = () => {
        return (
            <TableHead>
                <TableRow>
                    { tableHeaders.map((head, idx) => {
                        return <TableCell 
                            align = {idx === 0 ? "left" : "right"}
                            sx = {{color: "#fff", fontWeight: "bold"}}
                            key = {idx}
                        >
                        {head}
                        </TableCell>
                    }) }
                </TableRow>
            </TableHead>
        )
    }

    return (
        <TableContainer component = {Paper} sx = {{background: "transparent"}}>
            <Table sx = {{ minWidth: 700 }} aria-label = "customized table">
                { renderTableHead() }
                { renderTableBody() }
            </Table>
        </TableContainer>
    )
}

export default CustomTable