import React, { Component } from 'react'

//Material-UI
import { Grid } from '@mui/material'

import SlideShow from '../../Components/SlideShow/SlideShow'
import Filter from '../../Components/Filter.js/Filter'
import Sorter from '../../Components/Sorter'
import EventCard from '../../Components/EventCard'
import Page from '../../Components/Page'
import Loading from '../../Components/Loading/Loading'

import {getEvents, filterEvents, sortEvents} from '../../api/events'

import './Events.css'
import eventSample from '../../assets/images/event_sample.jpg'

class Events extends Component {
    state = {
        filters: [],
        categoryChecked: [],
        data: [],
        show: 6,
        sortBy: "All",
        dataListType: "Grid",
        total: 10,
        current: 1,
        loading: false
    }

    carouselImages = [
        {url: eventSample}
    ]

    sortData = [
        {name: "show", label: "show", menuItems: [6, 8, 10]},
        {name: "sortBy", label: "Sort by", menuItems: ["All", "Upcoming Events", "Future Events"]}
    ]

    componentDidMount() {
        this.createFilters()
    }

    getEventsApi = async(page, size) => {
        try {
            this.setState({ loading: true })
            const response = await getEvents(page, size)
            if (response) {
                this.setState({ data: response.events, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
        }
    }

    filterEventsApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await filterEvents(data)
            if (response) {
                this.setState({ data: response.events, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
        }
    }

    sortEventsApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await sortEvents(data)
            if (response) {
                this.setState({ data: response.events, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
        }
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

    handlePaginationOnChange = (event, page) => {
        this.setState({ current: page })
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

    renderNoDataAvailable = () => {
        return (
            <div className = "no_data_container">
                <div className = "no_data">
                    <h1>No Data Available</h1>
                </div>
            </div>
        )
    }

    renderPagination = () => {
        const {total, current} = this.state
        return (
            <Page 
                count = {total} 
                page = {current} 
                onChange = {this.handlePaginationOnChange}
            />
        )
    }

    renderEventCard = (item, idx) => {
        const {dataListType} = this.state
        let no = dataListType === "Grid" ? 4 : 12
        return (
            <Grid item xs = {6} sm = {no} md = {no} key = {idx}>
                <EventCard item = {item}/>
            </Grid>
        )
    }

    renderEventsContainer = () => {
        const {data, sortBy} = this.state
        return (
            <div className = 'events_container'>
                <div className = 'events_list_header'>
                    <h2>{sortBy}</h2>
                </div>
                <div className = 'events_list'>
                    <Grid container spacing = {2}>
                        { data.map((i, idx) => this.renderEventCard(i, idx)) }
                    </Grid>
                </div>
            </div>
        )
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
        const {data} = this.state
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
                        <Grid item xs = {12} sm = {12} md = {12}>
                            { data.length > 0 ? this.renderEventsContainer() : this.renderNoDataAvailable() }
                        </Grid>
                        <div className = 'pagination_container'>
                            { data.length > 0 && this.renderPagination() }
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    render() {
        const {loading} = this.state
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
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default Events