import React, { Component } from 'react'

//Material-UI
import { Grid } from '@mui/material'

import SlideShow from '../../Components/SlideShow/SlideShow'
import Filter from '../../Components/Filter.js/Filter'
import Sorter from '../../Components/Sorter'
import EventCard from '../../Components/EventCard'
import Page from '../../Components/Page'

import './Events.css'
import eventSample from '../../assets/images/event_sample.jpg'

class Events extends Component {
    state = {
        filters: [],
        categoryChecked: [],
        data: [],
        show: 10,
        sortBy: "Upcoming Events",
        dataListType: "Grid",
        total: 10,
        current: 1,
    }

    carouselImages = [
        {url: eventSample}
    ]

    sortData = [
        {name: "show", label: "show", menuItems: ["5", "10", "20"]},
        {name: "sortBy", label: "Sort by", menuItems: ["Upcoming Events", "Future Events"]}
    ]

    dummySynopsis = "Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque."

    componentDidMount() {
        this.createFilters()

        //create dummy data
        this.createDummyData()
    }

    createDummyData = () => {
        const event = {
            name: "Ar Rahman Live-in-concert", 
            src: eventSample, 
            location: "Negombo-Colombo Main Rd, Ja-Ela 11350", 
            contact: "0117 549 650",
            description: this.dummySynopsis
        }

        const dummyArr = ["1", "2", "3", "4", "5", "6"]
        let eventsData = []

        dummyArr.forEach(() => eventsData.push(event))

        this.setState({ data: eventsData })
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
        const {total, current} = this.state
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
                            { this.renderEventsContainer() }
                        </Grid>
                        <div className = 'pagination_container'>
                            <Page count = {total} page = {current} onChange = {this.handlePaginationOnChange}/>
                        </div>
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