import React from 'react'

//Material-UI
import {
    TableContainer, 
    Paper, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    Checkbox, 
    FormControlLabel
} from '@mui/material'

const CustomTable = ({tableHeaders, tableData, selectedIndexes, handleRowDataOnClick}) => {
    const selected = selectedIndexes

    const isSelected = (name) => selected.indexOf(name) !== -1

    const handleClick = (e, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []
    
        if (selectedIndex === -1) 
        {
            newSelected = newSelected.concat(selected, name)
        } 
        else if (selectedIndex === 0) 
        {
            newSelected = newSelected.concat(selected.slice(1))
        } 
        else if (selectedIndex === selected.length - 1) 
        {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } 
        else if (selectedIndex > 0) 
        {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
        }

        let selectedRows = []
        newSelected.forEach(element => {
            tableData.forEach(data => {
                if (data.label === element) {
                    selectedRows.push(data)
                }
            })
        })

        handleRowDataOnClick(selectedRows, newSelected)
    }

    const renderCheckBox = (isItemSelected, label) => (
        <FormControlLabel 
            control = {<Checkbox color = 'primary' checked = {isItemSelected}/>} 
            label = {label}
            sx = {{color: "rgba(255, 255, 255, 0.7)"}}
        />
    )

    const renderRowData = (val) => (
        <TableCell align = "right" sx = {{color: "rgba(255, 255, 255, 0.7)"}}>
            {val}
        </TableCell>
    )

    const renderTableHeadCell = (head, idx) => (
        <TableCell align = {idx === 0 ? "left" : "right"} sx = {{color: "#fff", fontWeight: "bold"}} key = {idx}>
            {head}
        </TableCell>
    )

    const renderTableRow = (row) => {
        const {id, name, address, contact, price, location} = row
        const isItemSelected = isSelected(name)
        return (
            <TableRow
                hover
                onClick = {(e) => handleClick(e, name)}
                role = "checkbox"
                aria-checked = {isItemSelected}
                tabIndex = {-1}
                key = {id}
                selected = {isItemSelected}
            >
                <TableCell padding = "checkbox">{ renderCheckBox(isItemSelected, name) }</TableCell>
                { renderRowData(address) }
                { renderRowData(contact) }
                { renderRowData(price) }
                { renderRowData(location) }
            </TableRow>
        )
    }
    
    const renderData = () => {
        const tab = this.props.tab

        switch(tab) {
            case "Events": return tableData.map((data) => renderTableRow(data))
            default: return
        }
    }

    const renderTableHead = () => {
        return (
            <TableHead sx = {{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                <TableRow>
                    { tableHeaders.map((head, idx) => renderTableHeadCell(head, idx)) }
                </TableRow>
            </TableHead>
        )
    }

    return (
        <TableContainer component = {Paper} sx = {{background: "transparent"}}>
            <Table sx = {{ minWidth: 700 }} aria-label = "customized table">
                { renderTableHead() }
                <TableBody>
                    { renderData() }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable