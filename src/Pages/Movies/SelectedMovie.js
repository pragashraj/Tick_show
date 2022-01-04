import React, { Component } from 'react'

import './Movies.css'
import headerImg from '../../assets/images/movie_sample.jpg'

class SelectedMovie extends Component {

    renderHeader = () => {
        return (
            <div className = 'sel_mov_header_container'>
                <div className = 'sel_mov_head_cont_top'>
                    <img src = {headerImg} alt = {"title"}/>
                </div>
                <div className = 'sel_mov_head_cont_foot'>
                    <div className = 'sel_mov_head_cont_trailer_card'>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className = 'selected_movie_root'>
                <div className = 'selected_movie_header'>
                    { this.renderHeader() }
                </div>
            </div>
        )
    }
}

export default SelectedMovie