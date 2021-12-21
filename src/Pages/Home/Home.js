import React, { Component } from 'react'

import SlideShow from '../../Components/SlideShow/SlideShow'

import './Home.css'
import image1 from '../../assets/CarouselImages/1.jpg'
import image2 from '../../assets/CarouselImages/2.jpg'
import image3 from '../../assets/CarouselImages/3.jpg'

class Home extends Component {
    state = {
        carouselIndex: 0
    }

    CAROUSEL_IMAGES = [
        { url: image1 },
        { url: image2 },
        { url: image3 }
    ]

    CAROUSEL_COVER_INFO = [
        {title: "Spiderman No way home", synopsis: ""},
        {title: "The Batman", synopsis: ""},
        {title: "Fantastic Beasts 3", synopsis: ""},
    ]

    handleBuyTicketOnClick = () => {

    }

    handleCarouselOnChange = (idx) => {
        this.setState({ carouselIndex: idx })
    }

    render() {
        const {carouselIndex} = this.state
        return (
            <div className = 'home_root_container'>
                <SlideShow 
                    images = {this.CAROUSEL_IMAGES} 
                    coverInfo = {this.CAROUSEL_COVER_INFO[carouselIndex]}
                    carouselOnChange = {this.handleCarouselOnChange}
                    handleBuyTicketOnClick = {this.handleBuyTicketOnClick}
                />
            </div>
        )
    }
}

export default Home