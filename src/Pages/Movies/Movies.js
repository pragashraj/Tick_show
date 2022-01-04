import React, { Component } from 'react'

import Filter from '../../Components/Filter.js/Filter'
import Sorter from '../../Components/Sorter'
import MovieItem from '../../Components/MovieItem'
import SlideShow from '../../Components/SlideShow/SlideShow'

//Material-UI
import { Grid } from '@mui/material'

import './Movies.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import movieCardImage2 from '../../assets/images/2.jpg'
import movieCardImage3 from '../../assets/images/3.jpg'
import movieCardImage4 from '../../assets/images/4.jpg'
import headerImg1 from '../../assets/CarouselImages/header_slider1.png'
import headerImg2 from '../../assets/CarouselImages/header_slider2.jpg'

class Movies extends Component {
    state = {
        filters: [],
        data: [],
        show: 10,
        sortBy: "Now Showing",
        languageChecked: [],
        experienceChecked: [],
        genreChecked: [],
        dataListType: "Grid"
    }

    sort_data = [
        {name: "show", label: "show", menuItems: ["5", "10", "20"]},
        {name: "sortBy", label: "Sort by", menuItems: ["Now Showing", "Upcoming Movies"]}
    ]

    images = [
        {url: headerImg1},
        {url: headerImg2}
    ]

    componentDidMount() {
        //for creating dummy data list
        this.createDataBlock()

        //for create filter list
        this.createFilters()
    }

    createDataBlock = () => {
        const data = [
            {name: "Spiderman No Way home", src: movieCardImage1, duration: "2hrs 30mins", genre: ["Action", "Adventure"], release: "December 17 2021", rotten: "94%", imdb: "99%" },
            {name: "The Batman", src: movieCardImage2, duration: "2hrs 30mins", genre: ["Action", "Adventure", "Crime"], release: "May 15 2022", rotten: "94%", imdb: "99%" },
            {name: "Fantastic Beasts 3", src: movieCardImage3, duration: "2hrs 30mins", genre: ["Action", "Adventure"], release: "May 17 2022", rotten: "94%", imdb: "99%" },
            {name: "The Amazing Spiderman 3", src: movieCardImage4, duration: "2hrs 30mins", genre: ["Action", "Adventure"], release: "October 17 2023", rotten: "94%", imdb: "99%" }
        ]

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

    handleBuyTicketOnClick = (data) => {

    }

    handleLikeOnClick = () => {

    }

    handleWatchTrailerOnClick = () => {

    }

    handleListTypeIconOnClick = (value) => {
        this.setState({ dataListType: value })
    }

    handleSortOnChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
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
                sort_data = {this.sort_data} 
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
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <div className = 'movies_root_container'>
                <div className = 'movies_header'>
                    <SlideShow images = {this.images}/>
                    <h1>Explore More movies</h1>
                </div>
                <div className = 'movie_parallax'>
                    <div className = 'movies_block'>
                        { this.renderMoviesBlockExtended() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies