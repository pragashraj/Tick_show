import React, { Component } from 'react'

import Search from '../../Components/Search'
import CustomButton from '../../Components/CustomCssButton/CustomButton'

import './Home.css'

class Home extends Component {
    state = {
        carouselIndex: 0
    }

    handleBuyTicketOnClick = () => {

    }

    handleCarouselOnChange = (idx) => {
        this.setState({ carouselIndex: idx })
    }

    renderHeaderTextContainer = () => {
        return (
            <div className = 'home_header_container'>
                <div className = 'header_mid_text_container'>
                    <span>Buy movie tickets in advance, watch trailers, read reviews and much more</span>
                    <div className = 'header_main_text'>
                        <h2>Book your tickets</h2>
                        <h2>with us</h2>
                    </div>
                </div>
            </div>
        )
    }

    renderBodyContentExtended = () => {
        return (
            <div className = 'home_container'>
                <div className = 'home_header_slide'>
                    <div className = "overlay"/>
                    { this.renderHeaderTextContainer() }
                    <div className = 'header_slide_footer'>
                        <div className = 'header_slide_footer_conatiner'>
                            <Search placeholder = "Search for movies"/>
                            <CustomButton label = "Search"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className = 'home_root_container'>
                { this.renderBodyContentExtended() }
            </div>
        )
    }
}

export default Home