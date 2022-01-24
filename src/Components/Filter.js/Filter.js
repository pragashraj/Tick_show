import React from 'react'

//Material-UI
import { Card, CardContent, List, Checkbox, Divider } from '@mui/material'

import './Filter.css'

const Filter = ({label, list, checked, handleToggle}) => {

    const renderListItem = (name, idx) => {
        const labelId = `checkbox-list-label-${idx}`
        return (
            <div key = {idx} onClick = {() => handleToggle(label, idx)} className = 'listitem'>
                <Checkbox
                    edge = "start"
                    checked = {checked.indexOf(idx) !== -1}
                    tabIndex = {-1}
                    disableRipple
                    inputProps = {{ 'aria-labelledby': labelId }}
                    style = {{ color: "#ff6347" }}
                />
                <span className = 'list_item_name'>{name}</span>
            </div>
        )
    }

    const renderContentList = () => {
        return (
            <CardContent>
                <List>
                    { list.map((item, idx) => renderListItem(item, idx)) }
                </List>
            </CardContent>
        )
    }

    const renderHeaderLabel = () => {
        return (
            <CardContent>
                <span className = 'header_label'>{label}</span>
            </CardContent>
        )
    }

    return (
        <Card sx = {{ maxWidth: 300, minHeight: 240,backgroundColor: "rgba(27, 79, 114, 0.4)" }}>
            { renderHeaderLabel() }
            <Divider sx = {{bgcolor: "white"}}/>
            { renderContentList() }
        </Card>
    )
}

export default Filter