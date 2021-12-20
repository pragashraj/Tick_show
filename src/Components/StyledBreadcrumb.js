import React from 'react'

import { emphasize, styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'

const BreadcrumbComponent = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize("#ff6347", 0.06),
        cursor: "pointer",
        color: "#ffffff"
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize("#ff6347", 0.12),
      },
    }
})

const StyledBreadcrumb = ({link}) => {
    const {label, href, icon} = link
    return (
        <BreadcrumbComponent href = {href} label = {label} icon = {icon}/>
    )
}

export default StyledBreadcrumb
