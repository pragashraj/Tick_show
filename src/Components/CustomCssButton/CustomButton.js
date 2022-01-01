import React from 'react'

import './CustomCssButton.css'

const CustomButton = ({label, variant}) => {
    return (
        <div className = {variant === "outlined" ? "custom_button_outlined" : "custom_button_contained"}>{label}</div>
    )
}

export default CustomButton