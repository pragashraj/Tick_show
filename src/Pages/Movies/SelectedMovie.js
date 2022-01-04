import React, { Component } from 'react'

import SelectedMovieHeader from './SelectedMovieHeader'

import './Movies.css'
import headerImg from '../../assets/images/movie_sample.jpg'

class SelectedMovie extends Component {
    
    renderMainContainer = () => {
        return (
            <div className = 'sel_movie_main_container'>

            </div>
        )
    }

    render() {
        return (
            <div className = 'selected_movie_root'>
                <SelectedMovieHeader src = {headerImg}/>
                <div className = 'movie_parallax'>
                    { this.renderMainContainer() }
                </div>
            </div>
        )
    }
}

export default SelectedMovie