import React from 'react'

//Material-UI
import {Pagination} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "#ff6347",
            fontWeight: "bold"
        },
        "& .MuiPaginationItem-outlinedSecondary.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, .15)", 
            backdropFilter: "blur(4px)"
        }
    }
})

const Page = ({count, page, onChange}) => {
    const classes = useStyles()

    return <Pagination
        count = {count} 
        variant = "outlined" 
        color = "secondary" 
        classes = {{ ul: classes.ul }}
        page = {page}
        onChange = {onChange}
    />
}

export default Page