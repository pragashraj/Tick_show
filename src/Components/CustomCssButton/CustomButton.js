import React from 'react'

import './CustomCssButton.css'

const CustomButton = ({label, variant, onClick}) => {
    return (
        <div 
            className = {variant === "outlined" ? "custom_button_outlined" : "custom_button_contained"}
            onClick = {onClick}
        >
            {label}
        </div>
    )
}

export default CustomButton