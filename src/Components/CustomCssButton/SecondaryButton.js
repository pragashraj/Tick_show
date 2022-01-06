import React from 'react'

import './CustomCssButton.css'

const SecondaryButton = ({label, onClick}) => {
    return (
        <div className = "panel-button" onClick = {onClick}>{label}</div>
    )
}

export default SecondaryButton
