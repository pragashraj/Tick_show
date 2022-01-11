import React from 'react'

import SimpleImageSlider from "react-simple-image-slider"

const SlideShow = ({images}) => {
    return (
        <SimpleImageSlider
            images = {images}
            showBullets = {true}
            showNavs = {true}
            loop = {true}
            autoPlay = {true}
            autoPlayDelay = {8.0}
            width = "99%"
            height = "75vh"
        />
    )
}

export default SlideShow