import React, { Component } from 'react'

import ContentList from '../../Components/ContentList/ContentList'

import './Movies.css'

class Movies extends Component {
    state = {
        nowShowingExpanded: false,
        upcomingExpanded: false
    }

    MOVIES_BLOCK = [
        {title: "Now Showing", list: ["1", "2", "3", "4", "5", "6"]},
        {title: "Upcoming Movies", list: ["1", "2", "3", "4", "5", "6"]},
    ]

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

    render() {
        return (
            <div className = 'movies_root_container'>
                <div className = 'movies_header'>
                    <h1>Explore More movies</h1>
                </div>
                <div className = 'parallax'>
                    <div className = 'movies_block'>
                        { this.MOVIES_BLOCK.map((item, idx) => {
                            const {title, list} = item
                            const name = this.getExpandStateAttribute(title)
                            return (
                                <ContentList 
                                    title = {title}
                                    listItems = {list}
                                    expanded = {this.state[name]}
                                    handleExpandOnClick = {this.handleExpandOnClick}
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