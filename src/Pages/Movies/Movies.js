import React, { Component } from 'react'

import ContentList from '../../Components/ContentList/ContentList'

import './Movies.css'
import movieCardImage1 from '../../assets/images/1.jpg'
import movieCardImage2 from '../../assets/images/2.jpg'
import movieCardImage3 from '../../assets/images/3.jpg'
import movieCardImage4 from '../../assets/images/4.jpg'
import movieCardImage5 from '../../assets/images/5.jpg'

class Movies extends Component {
    state = {
        movies_block: [],
        nowShowingExpanded: false,
        upcomingExpanded: false
    }

    componentDidMount() {
        //for creating dummy data list
        let dummyDataArray = []
        let dummyBlockArray = ["Now Showing", "Upcoming Movies"]

        dummyBlockArray.forEach(e => {
            let dummyArray = [movieCardImage1, movieCardImage2, movieCardImage3, movieCardImage5, movieCardImage4]

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

    handleExpandOnClick = (title) => {
        let name = this.getExpandStateAttribute(title)
        this.setState({ [name]: !this.state[name] })
    }

    handleBuyTicketOnClick = () => {

    }

    render() {
        const {movies_block} = this.state
        return (
            <div className = 'movies_root_container'>
                <div className = 'movies_header'>
                    <h1>Explore More movies</h1>
                </div>
                <div className = 'parallax'>
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
                </div>
            </div>
        )
    }
}

export default Movies