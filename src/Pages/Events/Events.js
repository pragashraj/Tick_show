import React, { Component } from 'react'

import SlideShow from '../../Components/SlideShow/SlideShow'

import './Events.css'
import slideShowImage from '../../assets/CarouselImages/slide_show.jpg'

class Events extends Component {

    carouselImages = [
        {url: slideShowImage}
    ]

    render() {
        return (
            <div className = 'events_root'>
                <div className = 'events_header'>
                    <SlideShow images = {this.carouselImages}/>
                    <h1>Explore more events</h1>
                </div>
                <div className = 'event_parallax'>
                </div>
            </div>
        )
    }
}

export default Events