import React from 'react'

import SimpleImageSlider from "react-simple-image-slider"

const SlideShow = ({images}) => {
    return (
        <SimpleImageSlider
            images = {images}
            showBullets = {false}
            showNavs = {true}
            loop = {true}
            autoPlay = {true}
            autoPlayDelay = {8.0}
            width = "100%"
            height = "100%"
        />
    )
}

export default SlideShow