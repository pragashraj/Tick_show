import React from 'react'

import SimpleImageSlider from "react-simple-image-slider"

const SlideShow = ({images, carouselOnChange}) => {

    const handleCarouselOnChange = (type, idx) => {
        let index = 0
        
        switch(type) {
            case "bulletIndex": index = idx
                break
            case "CompleteSlide": index = idx - 1
                break
            default: index = 0
        }

        carouselOnChange(index)
    }

    return (
        <SimpleImageSlider
            width = {"100%"}
            height = {"80vh"}
            images = {images}
            showBullets = {true}
            showNavs = {false}
            loop = {true}
            autoPlay = {true}
            autoPlayDelay = {8.0}
            onClickBullets = {idx => { handleCarouselOnChange("bulletIndex", idx) }}
            onCompleteSlide = {idx => { handleCarouselOnChange("CompleteSlide", idx) }}
        />
    )
}

export default SlideShow