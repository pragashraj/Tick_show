import React from 'react'

//Material-UI
import { emphasize } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import { makeStyles } from '@mui/styles'

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
            backgroundColor: emphasize("rgba(0, 0, 0, 0.4)", 0.06),
        },
    },
})

const StyledBreadcrumb = ({link}) => {
    const classes = useStyles()
    const {label, href, icon} = link

    return (
      <Link
          underline = "hover"
          className = {classes.link}
          href = {href}
      >
          <Chip label = {label} icon = {icon} className = {classes.chip} variant = "outlined" color = "primary"/>
      </Link>
    )
}

export default StyledBreadcrumb