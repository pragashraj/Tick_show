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

const CustomTable = ({tab, tableHeaders, tableData, selectedIndexes, handleRowDataOnClick}) => {
    const selected = selectedIndexes

    const isSelected = (name) => selected.indexOf(name) !== -1

    const handleClick = (name) => {
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
                if (data.name === element) {
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

    const renderMoviesTableRow = (row) => {
        const {id, name, duration, releaseDate, experience, genres} = row
        const isItemSelected = isSelected(name)
        let genre = ""
        genres.forEach(e => { genre += `${e} `})
        return (
            <TableRow hover key = {id}
                onClick = {(e) => handleClick(name)}
                role = "checkbox"
                aria-checked = {isItemSelected}
                tabIndex = {-1}
                selected = {isItemSelected}
            >
                <TableCell padding = "checkbox">{ renderCheckBox(isItemSelected, name) }</TableCell>
                { renderRowData(duration) }
                { renderRowData(releaseDate) }
                { renderRowData(experience) }
                { renderRowData(genre) }
            </TableRow>
        )
    }

    const renderMessagesTableRow = (row) => {
        const {id, name, email, subject, message, dateTime} = row
        const isItemSelected = isSelected(message)
        return (
            <TableRow hover key = {id}
                onClick = {(e) => handleClick(message)}
                role = "checkbox"
                aria-checked = {isItemSelected}
                tabIndex = {-1}
                selected = {isItemSelected}
            >
                <TableCell padding = "checkbox">{ renderCheckBox(isItemSelected, message) }</TableCell>
                { renderRowData(email) }
                { renderRowData(name) }
                { renderRowData(subject) }
                { renderRowData(dateTime) }
            </TableRow>
        )
    }

    const renderTheatreTableRow = (row) => {
        const {id, name, address, contact, rate, location} = row
        const isItemSelected = isSelected(name)
        return (
            <TableRow hover key = {id}
                onClick = {(e) => handleClick(name)}
                role = "checkbox"
                aria-checked = {isItemSelected}
                tabIndex = {-1}
                selected = {isItemSelected}
            >
                <TableCell padding = "checkbox">{ renderCheckBox(isItemSelected, name) }</TableCell>
                { renderRowData(address) }
                { renderRowData(contact) }
                { renderRowData(rate.imdb) }
                { renderRowData(location.location) }
            </TableRow>
        )
    }

    const renderEventTableRow = (row) => {
        const {id, name, address, contact, price, location} = row
        const isItemSelected = isSelected(name)
        return (
            <TableRow hover key = {id}
                onClick = {(e) => handleClick(name)}
                role = "checkbox"
                aria-checked = {isItemSelected}
                tabIndex = {-1}
                selected = {isItemSelected}
            >
                <TableCell>{ renderCheckBox(isItemSelected, name) }</TableCell>
                { renderRowData(address) }
                { renderRowData(contact) }
                { renderRowData(price) }
                { renderRowData(location.location) }
            </TableRow>
        )
    }
    
    const renderData = () => {
        switch(tab) {
            case "Events": return tableData.map((data) => renderEventTableRow(data))
            case "Theatres": return tableData.map((data) => renderTheatreTableRow(data))
            case "Messages": return tableData.map((data) => renderMessagesTableRow(data))
            case "Movies": return tableData.map((data) => renderMoviesTableRow(data))
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