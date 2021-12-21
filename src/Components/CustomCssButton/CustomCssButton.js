import React from 'react'

import './CustomCssButton.css'

const CustomCssButton = ({label, onClick}) => {
    return (
        <button className = "panel-button" onClick = {onClick}>{label}</button>
    )
}

export default CustomCssButton
