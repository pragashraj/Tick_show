import React, { Component } from 'react'

//Material-UI
import Grid from '@mui/material/Grid'

import Sorter from '../../Components/Sorter'
import TheatreListItem from '../../Components/TheatreListItem'
import SlideShow from '../../Components/SlideShow/SlideShow'
import Loading from '../../Components/Loading/Loading'
import Page from '../../Components/Page'

import {getTheatres, sortTheatres} from '../../api/theatres'

import './Theatres.css'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

class Theatres extends Component {
    state = {
        location: "All",
        show: 4,
        theatreList: [],
        total: 1,
        current: 1,
        dataListType: "Grid",
        loading: false,
    }

    sortData = [
        {name: "location", label: "Location", menuItems: ["All", "Colombo", "Jaffna"]},
        {name: "show", label: "show", menuItems: [4, 6, 10]}
    ]

    images = [
        {url: slideShowImage}
    ]

    componentDidMount() {
        this.getTheatresApi(0, 4)
    }

    getTheatresApi = async(page, size) => {
        try {
            this.setState({ loading: true })
            const response = await getTheatres(page, size)
            if (response) {
                this.storeResponseToState(response)
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
        }
    }

    sortTheatresApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await sortTheatres(data)
            if (response) {
                this.storeResponseToState(response)
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
        }
    }

    handleSortOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handlePaginationOnChange = (event, page) => {
        this.setState({ current: page })
    }

    handleTimeSlotOnClick = () => {

    }

    handleLikeOnClick = () => {
        
    }

    handleListTypeIconOnClick = (value) => {
        this.setState({ dataListType: value })
    }

    storeResponseToState = (response) => {
        this.setState({ 
            theatreList: response.theatres, 
            total: response.total, 
            current: response.current 
        })
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

    renderTheatreListItem = (item, idx) => {
        const {dataListType} = this.state
        let no = dataListType === "Grid" ? 6 : 12
        return (
            <Grid item xs = {12} sm = {no} md = {no} key = {idx}>
                <TheatreListItem 
                    item = {item}
                    handleLikeOnClick = {this.handleLikeOnClick}
                    handleTimeSlotOnClick = {this.handleTimeSlotOnClick}
                />
            </Grid>
        )
    }

    renderTheatresList = () => {
        const {theatreList} = this.state
        return (
            <div className = 'theatres_list'>
                <Grid container spacing = {2}>
                    { theatreList.map((i, idx) => this.renderTheatreListItem(i, idx)) }
                </Grid>
            </div>
        )
    }

    renderSort = () => {
        const {location, show, dataListType} = this.state
        const values = {location, show, dataListType}
        return (
            <Sorter 
                sortData = {this.sortData} 
                values = {values}
                handleChange = {this.handleSortOnChange}
                handleListTypeIconOnClick = {this.handleListTypeIconOnClick}
            />
        )
    }

    renderTheatresBlockExtended = () => {
        const {theatreList} = this.state
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { this.renderSort() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { theatreList.length > 0 ?  this.renderTheatresList() : this.renderNoDataAvailable() }
                </Grid>
                <div className = 'pagination_container'>
                    { theatreList.length > 0 && this.renderPagination() }
                </div>
            </Grid>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'theatres_root_container'>
                <div className = 'theatres_header'>
                    <SlideShow images = {this.images}/>
                    <h1>Explore More Theatres</h1>
                </div>
                <div className = 'theatre_parallax'>
                    <div className = 'theatres_block'>
                        <h1>Our Theatres</h1>
                        { this.renderTheatresBlockExtended() }
                    </div>
                </div>
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default Theatres