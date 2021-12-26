import React, { Component } from 'react'

import ContentList from '../../Components/ContentList/ContentList'
import Filter from '../../Components/Filter.js/Filter'
import Sorter from '../../Components/Sorter'

//Material-UI
import { Grid } from '@mui/material'

import './Movies.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import movieCardImage2 from '../../assets/images/2.jpg'
import movieCardImage3 from '../../assets/images/3.jpg'
import movieCardImage4 from '../../assets/images/4.jpg'
import movieCardImage5 from '../../assets/images/5.jpg'

class Movies extends Component {
    state = {
        filters: [],
        movies_block: [],
        nowShowingExpanded: true,
        upcomingExpanded: false,
        show: 10,
        sortBy: "Now Showing",
        languageChecked: [],
        experienceChecked: [],
        genreChecked: []
    }

    sort_data = [
        {name: "show", label: "show", menuItems: ["5", "10", "20"]},
        {name: "sortBy", label: "Sort by", menuItems: ["Now Showing", "Upcoming Movies"]}
    ]

    componentDidMount() {
        //for creating dummy data list
        this.createDataBlock()

        //for create filter list
        this.createFilters()
    }

    createDataBlock = () => {
        let dummyDataArray = []
        let dummyBlockArray = ["Now Showing", "Upcoming Movies"]

        dummyBlockArray.forEach(e => {
            let dummyArray = [movieCardImage1, movieCardImage2, movieCardImage3, movieCardImage5, movieCardImage4, movieCardImage1]

            let movieCards = []
            dummyArray.forEach(e => {
                const movieCard = {title: "Spiderman no way home", otherInfo: "English", imageSrc: e}
                movieCards.push(movieCard)
            })

            const blockData = {title: e, list: movieCards}

            dummyDataArray.push(blockData)
        })

        this.setState({ movies_block: dummyDataArray })
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

    handleExpandOnClick = (title) => {
        let name = this.getExpandStateAttribute(title)
        this.setState({ [name]: !this.state[name] })
    }

    handleBuyTicketOnClick = () => {

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
        this.setState({ checked: [] })
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

    getExpandStateAttribute = (title) => {
        let name = "nowShowingExpanded"

        switch (title) {
            case "Now Showing": name = "nowShowingExpanded"
                break
            case "Upcoming Movies": name = "upcomingExpanded"
                break
            default : return name
        }

        return name
    }

    renderSort = () => {
        const {show, sortBy} = this.state
        const values = {show, sortBy}
        return (
            <Sorter 
                sort_data = {this.sort_data} 
                handleChange = {this.handleSortOnChange}
                values = {values}
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
                        <Grid item xs = {12} sm = {12} md = {12}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    renderMoviesBlock = () => {
        const {movies_block} = this.state
        return (
            <div className = 'movies_block'>
                { movies_block.map((item, idx) => {
                    const {title, list} = item
                    const name = this.getExpandStateAttribute(title)
                    return (
                        <ContentList 
                            title = {title}
                            listItems = {list}
                            expanded = {this.state[name]}
                            handleExpandOnClick = {this.handleExpandOnClick}
                            handleBuyOnClick = {this.handleBuyTicketOnClick}
                            key = {idx}
                        />
                    ) 
                }) }
            </div>
        )
    }

    render() {
        return (
            <div className = 'movies_root_container'>
                <div className = 'movies_header'>
                    <h1>Explore More movies</h1>
                </div>
                <div className = 'parallax'>
                    <div className = 'movies_block'>
                        { this.renderMoviesBlockExtended() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies