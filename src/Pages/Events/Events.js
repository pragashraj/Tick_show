import React, { Component } from 'react'

//Material-UI
import { Grid } from '@mui/material'

import SlideShow from '../../Components/SlideShow/SlideShow'
import Filter from '../../Components/Filter.js/Filter'
import Sorter from '../../Components/Sorter'

import './Events.css'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

class Events extends Component {
    state = {
        filters: [],
        categoryChecked: [],
        data: [],
        show: 10,
        sortBy: "Now Showing",
        dataListType: "Grid",
    }

    carouselImages = [
        {url: slideShowImage}
    ]

    sortData = [
        {name: "show", label: "show", menuItems: ["5", "10", "20"]},
        {name: "sortBy", label: "Sort by", menuItems: ["Now Showing", "Upcoming Events"]}
    ]

    componentDidMount() {
        this.createFilters()
    }

    createFilters = () => {
        const filterArray = ["Category"]
        const filterElementContents = {
            "Category": ["Musical", "Conference", "Magic shows"],
        }
        
        let array = []
        filterArray.forEach(element => {
            const filterElement = {label: element, list: filterElementContents[element]}
            array.push(filterElement)
        })

        this.setState({ filters: array })
    }

    handleSortOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleListTypeIconOnClick = (value) => {
        this.setState({ dataListType: value })
    }

    handleFilterClearOnClick = () => {
        this.setState({ categoryChecked: [] })
    }

    handleFilterCheckBoxToggle = (label, index) => {
        let name = this.getCheckedStateAttribute(label)

        const checked = this.state[name]
        const currentIndex = checked.indexOf(index)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(index)
        } 
        else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({ [name]: newChecked })
    }

    getCheckedStateAttribute = (label) => {
        let name = "categoryChecked"

        switch(label) {
            case "Category": name = "categoryChecked"
                break
            default: return name
        }

        return name
    }

    renderSort = () => {
        const {show, sortBy, dataListType} = this.state
        const values = {show, sortBy, dataListType}
        return (
            <Sorter 
                sortData = {this.sortData} 
                values = {values}
                handleChange = {this.handleSortOnChange}
                handleListTypeIconOnClick = {this.handleListTypeIconOnClick}
            />
        )
    }

    renderFilters = () => {
        const {filters} = this.state
        return (
            <Grid container spacing = {2} sx = {{marginTop: "5px"}}>
                { filters.map((item, idx) => {
                    const {label, list} = item
                    const name = this.getCheckedStateAttribute(label)
                    return (
                        <Grid item xs = {4} sm = {12} md = {12} key = {idx}>
                            <Filter 
                                label = {label}
                                list = {list}
                                checked = {this.state[name]}
                                handleToggle = {this.handleFilterCheckBoxToggle}
                            />
                        </Grid>
                    )
                }) }
            </Grid>
        )
    }

    renderEventsBlock = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {4} md = {2}>
                    <div className = 'filter_header'>
                        <span className = 'filter_header_title'>Filter by</span>
                        <span className = 'filter_header_clear' onClick = {this.handleFilterClearOnClick}>Clear all</span>
                    </div>
                    { this.renderFilters() }
                </Grid>
                <Grid item xs = {12} sm = {8} md = {10}>
                    <Grid container spacing = {2}>
                        <Grid item xs = {12} sm = {12} md = {12}>
                            { this.renderSort() }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <div className = 'events_root'>
                <div className = 'events_header'>
                    <SlideShow images = {this.carouselImages}/>
                    <h1>Explore more events</h1>
                </div>
                <div className = 'event_parallax'>
                    <div className = 'events_container'>
                        { this.renderEventsBlock() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Events