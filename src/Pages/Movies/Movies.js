import React, { Component } from 'react'

import { useNavigate } from "react-router-dom"

import Filter from '../../Components/Filter.js/Filter'
import Sorter from '../../Components/Sorter'
import MovieItem from '../../Components/MovieItem'
import SlideShow from '../../Components/SlideShow/SlideShow'
import Page from '../../Components/Page'
import Loading from '../../Components/Loading/Loading'
import SnackBarAlert from '../../Components/SnackBarAlert'

import { getMovies, filterMovies, sortMovies } from '../../api/movie'

//Material-UI
import { Grid } from '@mui/material'

import './Movies.css'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

function withNavigate(Component) {
    return props => <Component {...props} navigate = {useNavigate()}/>
}

class Movies extends Component {
    state = {
        filters: [],
        data: [],
        show: 4,
        sortBy: "All movies",
        languageChecked: [],
        experienceChecked: [],
        genreChecked: [],
        dataListType: "Grid",
        total: 1,
        current: 1,
        loading: false,
        message: "",
        severity: "",
        openSnackBar: false,
    }

    sortData = [
        {name: "show", label: "show", menuItems: [4, 6, 10]},
        {name: "sortBy", label: "Sort by", menuItems: ["All movies", "Now Showing", "Upcoming Movies"]}
    ]

    carouselImages = [
        {url: slideShowImage}
    ]

    componentDidMount() {
        this.getMoviesApi(1, this.state.show)

        //for create filter list
        this.createFilters()

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    getMoviesApi = async(page, size) => {
        try {
            this.setState({ loading: true })
            const response = await getMovies(page, size)
            if (response) {
                this.setState({ data: response.movies, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    filterMoviesApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await filterMovies(data)
            if (response) {
                this.setState({ data: response.movies, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    sortMoviesApi = async(page) => {
        try {
            this.setState({ loading: true })
            const {sortBy, show} = this.state
            const data = {sortBy, page, size: show}
            const response = await sortMovies(data)
            if (response) {
                this.setState({ data: response.movies, total: response.total, current: response.current })
            }
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    createFilters = () => {
        const filterArray = ["Language", "Experience", "Genre"]
        const filterElementContents = {
            "Language": ["English", "Tamil", "Sinhala"],
            "Experience": ["2D", "3D"],
            "Genre": ["Action", "Adventure", "Comedy"]
        }
        
        let array = []
        filterArray.forEach(element => {
            const filterElement = {label: element, list: filterElementContents[element]}
            array.push(filterElement)
        })

        this.setState({ filters: array })
    }

    handleSortChangeApiCall = (name) => {
        if (name === "All movies") {
            this.getMoviesApi(0, 4)
        } 
        else {
            this.sortMoviesApi(0)
        }
    }

    handleBuyTicketOnClick = (movieItem) => {
        this.props.navigate(`/selectedMovie`, { state: movieItem })
    }

    handleLikeOnClick = (movieItem) => {
        
    }

    handleWatchTrailerOnClick = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    handleListTypeIconOnClick = (value) => {
        this.setState({ dataListType: value })
    }

    handleSortOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value }, this.handleSortChangeApiCall(name))
    }

    handlePaginationOnChange = (event, page) => {
        this.setState({ current: page })
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

    handleFilterClear = () => {
        this.setState({         
            languageChecked: [],
            experienceChecked: [],
            genreChecked: [] 
        })
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    getCheckedStateAttribute = (label) => {
        let name = "languageChecked"

        switch(label) {
            case "Language": name = "languageChecked"
                break
            case "Experience": name = "experienceChecked"
                break
            case "Genre": name = "genreChecked"
                break
            default: return name
        }

        return name
    }

    renderSnackBar = () => {
        const {openSnackBar, severity, message} = this.state
        return (
            <SnackBarAlert 
                open = {openSnackBar} 
                severity = {severity} 
                message = {message} 
                handleClose = {this.handleSnackBarClose}
            />
        )
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

    renderMovieCard = (item, idx) => {
        const {dataListType} = this.state
        let no = dataListType === "Grid" ? 6 : 12
        return (
            <Grid item xs = {no} sm = {no} md = {no} key = {idx}>
                <MovieItem
                    item = {item}
                    handleLikeOnClick = {this.handleLikeOnClick}
                    handleBuyTicketOnClick = {this.handleBuyTicketOnClick}
                    handleWatchTrailerOnClick = {this.handleWatchTrailerOnClick}
                />
            </Grid>
        )
    }

    renderMoviesBlock = () => {
        const {data, sortBy} = this.state
        return (
            <div className = 'movies_block'>
                <div className = 'movies_list_header'>
                    <h2>{sortBy}</h2>
                </div>
                <div className = 'movies_list'>
                    <Grid container spacing = {2}>
                        { data.map((i, idx) => this.renderMovieCard(i, idx)) }
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

    renderMoviesBlockExtended = () => {
        const {data} = this.state
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {4} md = {2}>
                    <div className = 'filter_header'>
                        <span className = 'filter_header_title'>Filter by</span>
                        <span className = 'filter_header_clear' onClick = {this.handleFilterClear}>Clear all</span>
                    </div>
                    { this.renderFilters() }
                </Grid>
                <Grid item xs = {12} sm = {8} md = {10}>
                    <Grid container spacing = {2}>
                        <Grid item xs = {12} sm = {12} md = {12}>
                            { this.renderSort() }
                        </Grid>
                        <Grid item xs = {12} sm = {12} md = {12}>
                            { data.length > 0 ? this.renderMoviesBlock() : this.renderNoDataAvailable()}
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
            <div className = 'movies_root_container'>
                <div className = 'movies_header'>
                    <SlideShow images = {this.carouselImages}/>
                    <h1>Explore more movies</h1>
                </div>
                <div className = 'movie_parallax'>
                    <div className = 'movies_block'>
                        { this.renderMoviesBlockExtended() }
                    </div>
                </div>
                { this.renderSnackBar() }
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default withNavigate(Movies)