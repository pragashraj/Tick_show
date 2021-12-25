import React, { Component } from 'react'

import './Theatres.css'

class Theatres extends Component {
    render() {
        return (
            <div className = 'theatres_root_container'>
                <div className = 'theatres_header'>
                    <h1>Explore More Theatres</h1>
                </div>
                <div className = 'parallax'>
                    <div className = 'theatres_block'>
                        <h1>Our Theatres</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Theatres