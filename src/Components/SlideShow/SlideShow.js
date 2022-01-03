import React from 'react'

import SimpleImageSlider from "react-simple-image-slider"

const SlideShow = ({images}) => {
    return (
        <SimpleImageSlider
            width = {"100%"}
            height = {"80vh"}
            images = {images}
            showBullets = {true}
            showNavs = {true}
            loop = {true}
            autoPlay = {true}
            autoPlayDelay = {8.0}
        />
    )
}

export default SlideShow