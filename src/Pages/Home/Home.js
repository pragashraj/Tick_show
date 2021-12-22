import React, { Component } from 'react'

import SlideShow from '../../Components/SlideShow/SlideShow'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

import './Home.css'
import image1 from '../../assets/CarouselImages/1.jpg'
import imageKids from '../../assets/images/kids.jpg'

import {synopsis, des} from '../../Constants/Value'

class Home extends Component {
    state = {
        carouselIndex: 0
    }

    CAROUSEL_IMAGES = [
        { url: image1 },
    ]

    CAROUSEL_COVER_INFO = [
        {title: "Fantastic Beasts 3", synopsis},
    ]

    CONTENT_INFO = [
        {id: "1", head: "Book your tickets quickly", des, type: "Left", src: imageKids},
        {id: "2", head: "Mobile app for ticket booking", des, type: "Right", src: imageKids},
        {id: "3", head: "Anywhere. Anytime", des, type: "Left", src: imageKids},
        {id: "4", head: "Kids Packages", des, type: "Right", src: imageKids},
    ]

    handleBuyTicketOnClick = () => {

    }

    handleCarouselOnChange = (idx) => {
        this.setState({ carouselIndex: idx })
    }

    renderBodyContent = () => {
        return (
            <div className = 'home_body_content'>
                { this.CONTENT_INFO.map(item => {
                    const {id, type} = item
                    return type === "Left" ? <ContentLeft item = {item} key = {id}/> : <ContentRight item = {item} key = {id}/>
                }) }
            </div>
        )
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
                <div className = 'home_body_content_root'>
                    
                </div>
            </div>
        )
    }
}

export default Home