import React from 'react'

import './CustomCssButton.css'

const CustomButton = ({label}) => {
    return (
        <div className = "custom_button">{label}</div>
    )
}

export default CustomButton