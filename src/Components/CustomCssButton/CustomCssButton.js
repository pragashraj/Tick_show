import React from 'react'

import './CustomCssButton.css'

const CustomCssButton = ({label, onClick}) => {
    return (
        <button className = "primary-btn" onClick = {onClick}>{label}</button>
    )
}

export default CustomCssButton
