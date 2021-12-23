import React, { Component } from 'react'

import './Movies.css'

class Movies extends Component {
    render() {
        return (
            <div className = 'movies_root_container'>
                <div className = 'movies_header'>
                    <h1>Explore More movies</h1>
                </div>
                <div className = 'parallax'>
                    <div className = 'movies_block'>
                        <div className = 'movies_block_list'>
                            <div className = 'list_item'>
                                <h2>Now Showing</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies