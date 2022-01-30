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
import movie_sample from '../../assets/images/movie_sample.jpg'
import cast_sample from '../../assets/images/cast_sample.jpg'
import crew_sample from '../../assets/images/crew_sample.jpg'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

function withNavigate(Component) {
    return props => <Component {...props} navigate = {useNavigate()}/>
}

class Movies extends Component {
    state = {
        filters: [],
        data: [],
        show: 4,
        sortBy: "Now Showing",
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
        {name: "show", label: "show", menuItems: ["4", "6", "10"]},
        {name: "sortBy", label: "Sort by", menuItems: ["Now Showing", "Upcoming Movies"]}
    ]

    carouselImages = [
        {url: slideShowImage}
    ]

    componentDidMount() {
        //for creating dummy data list
        this.createDataBlock()

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

    createDataBlock = () => {
        const cast_crew_dum = ["1", "2", "3", "4", "5", "6"]
        let cast = []
        let crew = []

        const castObj = { name: "Tom Holland", character: "Peter Parker", src: cast_sample }
        const crewObj = { name: "John Watts", profession: "Director", src: crew_sample }

        cast_crew_dum.forEach(e => {
            cast.push(castObj)
            crew.push(crewObj)
        })

        const movie = {
            name: "Spiderman No Way home", 
            src: movie_sample, 
            duration: "2hrs 30mins", 
            genre: ["Action", "Adventure"], 
            release: "December 17 2021", 
            rotten: "94%", 
            imdb: "99%",
            userRate: "4.5",
            url: "https://Google.com",
            gallery: [movie_sample, movie_sample, movie_sample, movie_sample],
            synopsis: "",
            cast,
            crew,
        }

        const dummyArr = ["1", "2", "3", "4"]
        let data = []

        dummyArr.forEach(e => data.push(movie))

        this.setState({ data })
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
        this.setState({ [name]: value }, this.sortMoviesApi(0))
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
        const {total, current} = this.state
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
                            { this.renderMoviesBlock() }
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
        const {openSnackBar, severity, message, loading} = this.state
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
                <SnackBarAlert 
                    open = {openSnackBar} 
                    severity = {severity} 
                    message = {message} 
                    handleClose = {this.handleSnackBarClose}
                />
                <Loading open = {loading}/>
            </div>
        )
    }
}

export default withNavigate(Movies)