import React from 'react'

import PropTypes from "prop-types"

//Material-UI
import { Chip, Link} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { emphasize } from '@mui/material/styles'

const useStyles = makeStyles({
    link: {
        '&:hover': {
            textDecoration: 'none'
        },
    },
    chip: {
        color: "#fff",
        boxShadow: "10px",
        padding: "2px",
        '&:hover': {
            cursor: "pointer",
            backgroundColor: emphasize("rgba(255, 255, 255, 0.4)", 0.06)
        }
    },
})

const StyledBreadcrumb = ({link}) => {
    const classes = useStyles()
    
    const {label, href, icon} = link

    const IconImage = icon

    return (
        <Link underline = "hover" className = {classes.link} href = {href}>
            <Chip 
                label = {label} 
                className = {classes.chip} 
                variant = "contained" 
                avatar = {<IconImage style = {{ color: "white" }} />}
            />
        </Link>
    )
}

StyledBreadcrumb.propTypes = {
    IconImage: PropTypes.element
}

export default StyledBreadcrumb